import GradientOptions from "./GradientOptions";
import UniformOptions from "./UniformOptions";

function ContextualColorApplicator({
  elementName,
  currentColor,
  currentNumber,
  currentPath,
  opacity,
  setOpacity,
}) {
  const uniformList = [
    "line",
    "polyline",
    "polygon",
    "path",
    "rect",
    "circle",
    "ellipse",
    "text",
  ];

  const derivedOpacity = opacity / 100;

  switch (true) {
    case uniformList.includes(elementName):
      return (
        <UniformOptions
          currentColor={currentColor}
          currentNumber={currentNumber}
          currentPath={currentPath}
          opacity={opacity}
          setOpacity={setOpacity}
          derivedOpacity={derivedOpacity}
        />
      );
    case elementName === "stop":
      return (
        <GradientOptions
          currentColor={currentColor}
          currentNumber={currentNumber}
          currentPath={currentPath}
          opacity={opacity}
          setOpacity={setOpacity}
          derivedOpacity={derivedOpacity}
        />
      );
    default:
      null;
  }
}

export default ContextualColorApplicator;
