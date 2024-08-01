import { useState } from "react";
import { useSelector } from "react-redux";
import LargeStyleEditorContainer from "../../ui/LargeStyleEditorContainer";
import SvgElementNavigator from "./SvgElementNavigator";
import CreateSvgElement from "./CreateSvgElement";
import widthAndHeightToViewBox from "../../helpers/widthAndHeightToViewBox";
import getViewBox from "../../helpers/getViewBox";
import ContextualColorApplicator from "./ContextualColorApplicator";
import ColorPickers from "./ColorPickers";
import flattenSvgElements from "../../helpers/flattenSvgElements";
import { validTagNames, ignoreList } from "../../helpers/validSvgData";
import SvgEditorContainer from "../../ui/SvgContainer/SvgEditorContainer";

const findElementByPath = (element, path) =>
  path.reduce(
    (currentElement, index) => currentElement.children[index],
    element,
  );

function SvgColorEditor() {
  //TOTRY: Go through the useState variables here and in UniformOptions and ContextualColorApplicator and consider moving them into a redux store
  const [currentColor, setCurrentColor] = useState("slate");
  const [currentNumber, setCurrentNumber] = useState(500);
  const [opacity, setOpacity] = useState(100);

  const exampleWidth = 200;

  const { svgs, currentlySelectedSvg } = useSelector(
    (state) => state.svgEditor,
  );
  const svgData = svgs.find((e) => e.svgName === currentlySelectedSvg);
  const { attributes: atts = {} } = svgData.svg || {};
  const flattenedSvg = flattenSvgElements(svgData.svg);
  const filteredSvg = flattenedSvg.filter(
    (e) => !ignoreList.includes(e.tagName) && validTagNames.includes(e.tagName),
  );
  const [currentPath, setCurrentPath] = useState(filteredSvg[0].path);
  const currentElement = findElementByPath(svgData.svg, currentPath);
  const currentElementName = currentElement.tagName;
  const viewBox = atts?.viewBox
    ? atts.viewBox.replaceAll(/\D/g, "")
    : widthAndHeightToViewBox(atts);

  return (
    <LargeStyleEditorContainer>
      <SvgEditorContainer>
        <div className="grid grid-cols-[360px_1fr_1fr_432px] p-4">
          <div className="flex pb-8 text-2xl">Choose an SVG part</div>
          <div className="flex pb-8 text-2xl">Choose a Color</div>
          <div className="flex pb-8 text-2xl">Refine the Color</div>
          <div className="flex pb-8 text-2xl">Apply Color and Options</div>
          <div className="flex flex-col gap-4 pr-8">
            <div className="flex h-max flex-col bg-white">
              <SvgElementNavigator
                currentPath={currentPath}
                setCurrentPath={setCurrentPath}
                viewBox={viewBox}
                selectedSvg={svgData}
                filteredSvg={filteredSvg}
                flattenedSvg={flattenedSvg}
                exampleWidth={exampleWidth}
              />
            </div>
            <div className="flex flex-col items-center justify-center bg-neutral-50 pb-8 pt-2">
              <div className="text-zinc-950">
                <div className="flex justify-center">Example Space</div>
              </div>
              <div className="flex items-center bg-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  {...svgData.svg.attributes}
                  viewBox={getViewBox(svgData.svg.attributes)}
                  height="100%"
                  width={exampleWidth}
                >
                  {svgData.svg.children.map((child) => CreateSvgElement(child))}
                </svg>
              </div>
            </div>
          </div>
          <ColorPickers
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            currentNumber={currentNumber}
            setCurrentNumber={setCurrentNumber}
          />
          <ContextualColorApplicator
            elementName={currentElementName}
            currentColor={currentColor}
            currentNumber={currentNumber}
            currentPath={currentPath}
            opacity={opacity}
            setOpacity={setOpacity}
          />
        </div>
      </SvgEditorContainer>
    </LargeStyleEditorContainer>
  );
}

export default SvgColorEditor;
