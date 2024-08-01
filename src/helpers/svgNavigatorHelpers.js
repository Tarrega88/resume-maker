function elementToShow(currentElement, flattened, filtered) {
  const tagName = currentElement.tagName;
  const currentPath = currentElement.path;

  if (tagName === "stop") {
    const id = flattened.find(
      (e) => e.path.join("-") === currentPath.slice(0, -1).join("-"),
    )?.attributes?.id;
    return filtered.find((e) => e?.attributes?.fill === `url(#${id})`);
  }
  return currentElement;
}

function elementText(element, flattened) {
  switch (true) {
    case element.tagName === "stop":
      return flattened.find(
        (e) => e.path.join("-") === element.path.slice(0, -1).join("-"),
      ).tagName;
    case element?.attributes?.fill?.includes("url"):
      return `${element.tagName} (Editing will remove gradient)`;
    default:
      return element.tagName;
  }
}

export { elementToShow, elementText };
