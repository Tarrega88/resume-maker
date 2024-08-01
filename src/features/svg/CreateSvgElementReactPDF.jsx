import toCamelCase from "../../helpers/toCamelCase";
import { svgElementConverter } from "./svgElementToReactPdf";
import convertPercentageToNumber from "../../helpers/convertPercentageToNumber";
import { validTagNames } from "../../helpers/validSvgData";

export default function CreateSvgElementReactPdf({
  tagName,
  attributes,
  children,
  textContent,
}) {
  let props = Object.fromEntries(
    Object.entries(attributes).map(([key, value]) => [toCamelCase(key), value]),
  );
  //TODO: tspan isn't handled properly yet

  //Not sure if I want to keep this yet or not:
  // Flatten style attributes for Stop elements
  if (props.style) {
    props = { ...props, ...props.style };
    delete props.style;
  }

  //Should consider adding checks for other shape types that aren't gradients in case React-PDF has issues with those too
  if (tagName === "radialGradient" || tagName === "linearGradient") {
    ["cx", "cy", "r", "fx", "fy", "x1", "x2", "y1", "y2"].forEach((key) => {
      if (props[key]) {
        props[key] = convertPercentageToNumber(props[key]);
      }
    });
  }

  //I don't think this is needed for offset values, just for the cx above
  // if (tagName === "stop" && props.offset) {
  //   props.offset = convertPercentageToNumber(props.offset);
  // }

  if (tagName === "text") {
    delete props.fontFamily;
    // props.fontFamily = "Montserrat";
  }

  if (validTagNames.includes(tagName)) {
    const Tag = svgElementConverter[tagName];

    return (
      <Tag {...props} key={Math.random()}>
        {textContent || children.map(CreateSvgElementReactPdf)}
      </Tag>
    );
  } else {
    return null;
  }
}
