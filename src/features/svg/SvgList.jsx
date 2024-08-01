import { useDispatch, useSelector } from "react-redux";
import CreateSvgElement from "./CreateSvgElement";
import getViewBox from "../../helpers/getViewBox";
import { setCurrentlySelectedSVG, setSvgEditorView } from "./svgEditorSlice";
import LargeStyleEditorContainer from "../../ui/LargeStyleEditorContainer";
import SvgEditorContainer from "../../ui/SvgContainer/SvgEditorContainer";
import SvgRenderer from "./SvgRenderer";
import SmallRenderer from "./SmallRenderer";

function SvgList() {
  const svgs = useSelector((state) => state.svgEditor.svgs);

  const dispatch = useDispatch();

  function handleGoToEditor(svgName) {
    dispatch(setCurrentlySelectedSVG(svgName));
    dispatch(setSvgEditorView("svgEditor"));
  }

  return (
    <LargeStyleEditorContainer>
      <SvgEditorContainer>
        <div className="h-[50rem] overflow-auto">
          {/* <div className="mb-4 text-center text-2xl">SVG List</div> */}
          <div className="flex flex-wrap gap-6 p-8">
            <SvgRenderer />

            {svgs.map((e, i) => (
              <div
                key={i}
                className="flex cursor-pointer items-center border-2 border-white bg-white p-2 shadow-lg transition-all duration-300 hover:border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  {...e.svg.attributes}
                  viewBox={getViewBox(e.svg.attributes)}
                  height="300"
                  width="100%"
                  style={{ maxWidth: "100%" }}
                  onClick={() => handleGoToEditor(e.svgName)}
                >
                  {e.svg.children.map((child) => CreateSvgElement(child))}
                </svg>
              </div>
            ))}
          </div>
        </div>
      </SvgEditorContainer>
    </LargeStyleEditorContainer>
  );
}

export default SvgList;
