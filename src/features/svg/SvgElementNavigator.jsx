import CreateSvgElement from "./CreateSvgElement";
import getViewBox from "../../helpers/getViewBox";
import { elementToShow, elementText } from "../../helpers/svgNavigatorHelpers";

const SvgElementNavigator = ({
  currentPath,
  setCurrentPath,
  selectedSvg,
  flattenedSvg,
  filteredSvg,
  exampleWidth,
}) => {
  const currentIndex = filteredSvg.findIndex(
    (item) => item.path.join("-") === currentPath.join("-"),
  );

  const currentElement = filteredSvg[currentIndex] || {};
  const showElement = elementToShow(currentElement, flattenedSvg, filteredSvg);

  const updatePath = (newIndex) => {
    const newPath = filteredSvg[newIndex].path;
    setCurrentPath(newPath);
  };

  return (
    <div className="border-2 border-slate-700">
      <div className="flex items-center justify-between gap-2 bg-slate-600 px-8 py-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              updatePath(
                (currentIndex - 1 + filteredSvg.length) % filteredSvg.length,
              )
            }
          >
            &lt; Prev
          </button>
          <span className="bg-slate-600">{` Element ${currentIndex + 1} of ${filteredSvg.length} `}</span>
          <button
            onClick={() => updatePath((currentIndex + 1) % filteredSvg.length)}
          >
            Next &gt;
          </button>
        </div>
      </div>

      <div>
        <div className="text-center text-xl text-black">
          {elementText(currentElement, flattenedSvg)}
        </div>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            {...selectedSvg.svg.attributes}
            viewBox={getViewBox(selectedSvg.svg.attributes)}
            height="100%"
            width={exampleWidth}
            // style={{ width: exampleWidth }}
          >
            {CreateSvgElement(showElement)}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SvgElementNavigator;
