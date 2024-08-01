function flattenSvgElements(element, path = []) {
  let flatElements = [{ ...element, path }];
  if (element.children) {
    element.children.forEach((child, index) => {
      flatElements = flatElements.concat(
        flattenSvgElements(child, [...path, index]),
      );
    });
  }
  return flatElements;
}

export default flattenSvgElements;
