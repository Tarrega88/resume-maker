import { FaFileImage } from "react-icons/fa";
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
import TopRowElement from "../../TopRowElement";
import TreeButtonNameEditor from "../../TreeButtonNameEditor";
import MovingArrowContainer from "../../MovingArrowContainer";
import ImageOptionButtons from "./ImageOptionButtons";

function TreeButtonImage({
  id,
  itemContainerType,
  itemName,
  itemPath,
  currentlySelected,
  parentSelected,
  handleUpdateScroll,
}) {
  const dispatch = useDispatch();
  const [editorOpen, setEditorOpen] = useState(false);
  const [localName, setLocalName] = useState(itemName);
  const [showStyles, setShowStyles] = useState(false);

  const copiedId = useSelector((state) => state.sectionCreator.copiedId);
  const copied = id === copiedId;

  const namePath = itemPath.slice(1).map((e) => e + 1);

  function handleChangeName(e) {
    if (e.code !== "Enter") return;
    setEditorOpen(false);
    dispatch(editName(localName));
  }

  function handleCopySection() {
    dispatch(copySection());
  }

  function handleButtonClick() {
    if (!currentlySelected) {
      dispatch(setPath(itemPath));
      handleUpdateScroll();
    }
  }

  function handleSetEditorOpen(e) {
    e.stopPropagation();
    dispatch(editName(localName));
    setEditorOpen((open) => !open);
  }

  function handleRemoveSection() {
    dispatch(removeSection());
    setEditorOpen(false);
    handleUpdateScroll();
    dispatch(setPath(itemPath));
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
          <TopRowElement icon1={<FaFileImage />} textSize="text-md" />
        </div>
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
        {currentlySelected && (
          <ImageOptionButtons
            showStyles={showStyles}
            setShowStyles={setShowStyles}
            editorOpen={editorOpen}
            handleSetEditorOpen={handleSetEditorOpen}
            copied={copied}
            handleCopySection={handleCopySection}
            handleDelete={handleRemoveSection}
          />
        )}
      </div>
    </div>
  );
}

export default TreeButtonImage;
