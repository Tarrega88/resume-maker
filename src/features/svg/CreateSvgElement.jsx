import toCamelCase from "../../helpers/toCamelCase";

export default function CreateSvgElement(element) {
  if (!element || !element.tagName) {
    return null;
  }

  const {
    tagName: Tag,
    attributes = {},
    children = [],
    textContent = "",
  } = element;

  const props = Object.fromEntries(
    Object.entries(attributes).map(([key, value]) => [toCamelCase(key), value]),
  );

  return (
    <Tag {...props} key={Math.random()}>
      {textContent ||
        children.map((child, index) => (
          <CreateSvgElement key={index} {...child} />
        ))}
    </Tag>
  );
}
