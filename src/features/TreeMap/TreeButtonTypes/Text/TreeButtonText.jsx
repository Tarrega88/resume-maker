import { PiTextAa } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  editName,
  removeSection,
  setPath,
  copySection,
} from "../../../Creator/sectionCreatorSlice";
import TextEditor from "../../TextEditor";
import { useState } from "react";
import TreeButtonExpander from "../../TreeButtonExpander";
import ExpandedStyles from "../../ExpandedStyles";
import TopRowElement from "../../TopRowElement";
import TreeButtonNameEditor from "../../TreeButtonNameEditor";
import TextOptionButtons from "./TextOptionButtons";
import MovingArrowContainer from "../../MovingArrowContainer";

function TreeButtonText({
  id,
  itemContainerType,
  itemName,
  itemPath,
  currentlySelected,
  parentSelected,
  content,
  handleUpdateScroll,
}) {
  const dispatch = useDispatch();
  const [editorOpen, setEditorOpen] = useState(false);
  const [localName, setLocalName] = useState(itemName);
  const [showStyles, setShowStyles] = useState(false);

  const namePath = itemPath.slice(1).map((e) => e + 1);
  const copiedId = useSelector((state) => state.sectionCreator.copiedId);

  const copied = id === copiedId;

  function handleDelete() {
    handleRemoveSection();
  }

  function handleChangeName(e) {
    if (e.code !== "Enter") return;
    setEditorOpen(false);
    dispatch(editName(localName));
  }

  function handleButtonClick() {
    if (!currentlySelected) dispatch(setPath(itemPath));
    handleUpdateScroll();
  }

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
          <TopRowElement icon1={<PiTextAa />} textSize="text-md" />
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
        <div>
          <div className="flex justify-center">
            <TextEditor
              defaultValue={content}
              handleClose={() => setEditorOpen(false)}
              handleOpen={() => setEditorOpen(true)}
              editorOpen={editorOpen}
              currentlySelected={currentlySelected}
            />
          </div>
          {currentlySelected && (
            <TextOptionButtons
              showStyles={showStyles}
              setShowStyles={setShowStyles}
              editorOpen={editorOpen}
              handleSetEditorOpen={handleSetEditorOpen}
              copied={copied}
              handleCopySection={() => dispatch(copySection())}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TreeButtonText;
