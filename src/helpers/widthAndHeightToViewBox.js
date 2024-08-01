import removeNonNumbers from "./removeNonNumbers";

export default function widthAndHeightToViewBox(attributes) {
  const hasHeight = Object.hasOwn(attributes, "height");
  const hasWidth = Object.hasOwn(attributes, "width");

  switch (true) {
    case hasHeight && hasWidth:
      return `0 0 ${removeNonNumbers(attributes.height)} ${removeNonNumbers(attributes.width)}`;
    case hasWidth:
      return `0 0 ${removeNonNumbers(attributes.width)} ${removeNonNumbers(attributes.width)}`;
    case hasHeight:
      return `0 0 ${removeNonNumbers(attributes.height)} ${removeNonNumbers(attributes.height)}`;
    default:
      return "0 0 800 800";
  }
}
