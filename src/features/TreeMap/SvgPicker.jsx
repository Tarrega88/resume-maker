import { useDispatch, useSelector } from "react-redux";
import CreateSvgElement from "../svg/CreateSvgElement";
import getViewBox from "../../helpers/getViewBox";
import { addSection } from "../Creator/sectionCreatorSlice";
import SmallRenderer from "../svg/SmallRenderer";

function SvgPicker() {
  const svgs = useSelector((state) => state.svgEditor.svgs);

  const dispatch = useDispatch();

  return (
    <div>
      <SmallRenderer />
      <div className="flex flex-col gap-6 p-6">
        {svgs.map((e, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center border-2 border-white bg-white p-2 shadow-lg transition-all duration-300 hover:border-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              {...e.svg.attributes}
              viewBox={getViewBox(e.svg.attributes)}
              height="100"
              width="100%"
              style={{ maxWidth: "100%" }}
              onClick={() => dispatch(addSection({ type: "SVG", content: e }))}
            >
              {e.svg.children.map((child) => CreateSvgElement(child))}
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SvgPicker;
