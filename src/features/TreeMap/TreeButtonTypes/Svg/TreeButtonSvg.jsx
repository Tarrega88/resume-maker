import { useDispatch, useSelector } from "react-redux";
import {
  editName,
  removeSection,
  setPath,
  copySection,
} from "../../../Creator/sectionCreatorSlice";
import { useState } from "react";
import TreeButtonExpander from "../../TreeButtonExpander";
import ExpandedStyles from "../../ExpandedStyles";
import { SiSvg } from "react-icons/si";
import TopRowElement from "../../TopRowElement";
import TreeButtonNameEditor from "../../TreeButtonNameEditor";
import {
  setCurrentlySelectedSVG,
  setSvgEditorView,
} from "../../../svg/svgEditorSlice";
import { setEditorView } from "../../../editor/editorSlice";
import MovingArrowContainer from "../../MovingArrowContainer";
import SvgOptionButtons from "./SvgOptionButtons";

function TreeButtonSvg({
  id,
  itemContainerType,
  itemName,
  itemPath,
  currentlySelected,
  parentSelected,
  svgName,
  handleUpdateScroll,
}) {
  const dispatch = useDispatch();
  const [editorOpen, setEditorOpen] = useState(false);
  const [localName, setLocalName] = useState(itemName);
  const [showStyles, setShowStyles] = useState(false);

  const namePath = itemPath.slice(1).map((e) => e + 1);
  const copiedId = useSelector((state) => state.sectionCreator.copiedId);
  const copied = id === copiedId;

  function handleChangeName(e) {
    if (e.code !== "Enter") return;
    setEditorOpen(false);
    dispatch(editName(localName));
  }

  function handleOpenSvgEditor() {
    dispatch(setCurrentlySelectedSVG(svgName));
    dispatch(setEditorView("svg"));
    dispatch(setSvgEditorView("svgEditor"));
  }

  function handleButtonClick() {
    if (!currentlySelected) {
      dispatch(setPath(itemPath));
      handleUpdateScroll();
    }
  }

  //TODO 6/9/2024: Currently, the SVG editor opens instead of this, but this should probably open and then offer up a chance to hop into the editor from there
  function handleSetEditorOpen(e) {
    e.stopPropagation();
    dispatch(editName(localName));
    setEditorOpen((open) => !open);
  }

  function handleRemoveSection() {
    dispatch(removeSection());
    setEditorOpen(false);
    dispatch(setPath(itemPath));
    handleUpdateScroll();
  }

  return (
    <div className="relative">
      {currentlySelected && (
        <TreeButtonExpander
          text="Applied Styles / Order"
          isOpen={showStyles}
          setToClosed={() => setShowStyles(false)}
          double={true}
        >
          <ExpandedStyles />
        </TreeButtonExpander>
      )}
      <div
        className={`relative mb-2 flex min-h-12 w-60 cursor-pointer flex-col border-2 transition-all duration-300 ${copied ? "border-2 border-dashed border-blue-600" : ""} text-gray-100 transition-all duration-300 ${currentlySelected ? "bg-green-600" : parentSelected ? "bg-slate-600 hover:bg-slate-500" : "bg-gray-500 hover:bg-gray-600"} relative`}
        onClick={handleButtonClick}
        // onMouseEnter={() => dispatch(setPath(itemPath))}
      >
        <div className="mb-2 flex flex-grow justify-between p-1">
          <TopRowElement icon1={<SiSvg />} textSize="text-md" />
        </div>
        <div className="flex min-h-8 items-center justify-around gap-2">
          <MovingArrowContainer currentlySelected={currentlySelected}>
            <TreeButtonNameEditor
              editorOpen={editorOpen}
              currentlySelected={currentlySelected}
              defaultValue={localName}
              onChange={(e) => setLocalName(e.target.value)}
              onKeyDown={handleChangeName}
              placeHolder={`${itemContainerType} Name`}
              localName={
                localName
                  ? localName
                  : `${itemContainerType} ${namePath.join("-")}`
              }
            />
          </MovingArrowContainer>
        </div>
        {currentlySelected && (
          <SvgOptionButtons
            handleDelete={handleRemoveSection}
            copied={copied}
            handleCopySection={() => dispatch(copySection())}
            editorOpen={editorOpen}
            handleSetEditorOpen={handleSetEditorOpen}
            handleOpenSvgEditor={handleOpenSvgEditor}
          />
        )}
      </div>
    </div>
  );
}

export default TreeButtonSvg;
