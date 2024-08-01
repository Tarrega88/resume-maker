import { FaArrowsAltV } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  editName,
  removeSection,
  setPath,
  copySection,
  pasteSection,
  addSection,
  hideContent,
  addStyle,
  removeStyle,
  setReversed,
} from "../../../Creator/sectionCreatorSlice";
import { useState } from "react";

import { FaRegWindowRestore } from "react-icons/fa6";
import { FaRegWindowMaximize } from "react-icons/fa6";
import TopRowElement from "../../TopRowElement";
import TreeButtonNameEditor from "../../TreeButtonNameEditor";
import MovingArrowContainer from "../../MovingArrowContainer";
import ViewAddButtons from "./ViewAddButtons";
import ViewOptionButtons from "./ViewOptionButtons";
import ViewExpansions from "./ViewExpansions";
import { IoIosRewind } from "react-icons/io";

const icon = {
  Row: <FaArrowsAltH />,
  Column: <FaArrowsAltV />,
};

function TreeButtonView({
  id,
  itemContainerType,
  itemName,
  itemPath,
  currentlySelected,
  parentSelected,
  content,
  showContent,
  reversed,
  handleUpdateScroll,
}) {
  const dispatch = useDispatch();
  const [editorOpen, setEditorOpen] = useState(false);
  const [localName, setLocalName] = useState(itemName);

  const namePath = itemPath.slice(1).map((e) => e + 1);
  // const styles = useSelector(currentSection)?.styles;

  const reverseTypes = {
    Row: "row-reverse",
    Column: "column-reverse",
  };

  const normalTypes = {
    Row: "row",
    Column: "column",
  };

  // const isReversed = styles?.includes(reverseTypes[itemContainerType]);

  function handleReverse() {
    const normalStyle = normalTypes[itemContainerType];
    const reverseStyle = reverseTypes[itemContainerType];
    if (reversed) {
      dispatch(addStyle(normalStyle));
      dispatch(removeStyle(reverseStyle));
      dispatch(setReversed(false));
    } else {
      dispatch(addStyle(reverseStyle));
      dispatch(removeStyle(normalStyle));
      dispatch(setReversed(true));
    }
  }
  const copiedId = useSelector((state) => state.sectionCreator.copiedId);

  const copied = id === copiedId;
  const [showStyles, setShowStyles] = useState(false);
  const [showSvgs, setShowSvgs] = useState(false);
  const [showImgs, setShowImgs] = useState(false);

  function handleSetShowSvgs() {
    setShowImgs(false);
    setShowSvgs((show) => !show);
  }

  function handleSetShowImgs() {
    setShowSvgs(false);
    setShowImgs((show) => !show);
  }

  const maxIcon = showContent ? (
    <FaRegWindowRestore />
  ) : (
    <FaRegWindowMaximize />
  );

  function handleChangeName(e) {
    if (e.code !== "Enter") return;
    setEditorOpen(false);
    dispatch(editName(localName));
  }

  function handleCopySection() {
    dispatch(copySection());
  }

  function handlePasteSection() {
    dispatch(pasteSection());
  }

  function handleClick(type) {
    dispatch(addSection({ type }));
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

  function handleRemoveSection(removalPath) {
    dispatch(removeSection(removalPath));
    setEditorOpen(false);
    dispatch(setPath(itemPath));
    handleUpdateScroll();
  }

  function handleHideContent() {
    if (currentlySelected && content.length > 0) {
      dispatch(hideContent());
    }
  }

  return (
    <div className="relative">
      <ViewExpansions
        showStyles={showStyles}
        setShowStyles={setShowStyles}
        showSvgs={showSvgs}
        setShowSvgs={handleSetShowSvgs}
        showImgs={showImgs}
        setShowImgs={handleSetShowImgs}
      />

      <div
        className={`relative mb-2 flex min-h-12 w-60 cursor-pointer flex-col border-2 transition-all duration-300 ${copied ? "border-2 border-dashed border-blue-600" : ""} text-gray-100 transition-all duration-300 ${currentlySelected ? "bg-green-600" : parentSelected ? "bg-slate-600 hover:bg-slate-500" : "bg-gray-500 hover:bg-gray-600"} relative`}
        onClick={handleButtonClick}
        // onMouseEnter={() => dispatch(setPath(itemPath))}
      >
        <div className="mb-2 flex flex-grow justify-between p-1">
          <div className="flex gap-1">
            <TopRowElement
              icon1={icon[itemContainerType]}
              textSize="text-md"
              onClick={handleReverse}
              bgColor="hover:bg-green-500 active:bg-green-400"
              currentlySelected={currentlySelected}
            />
            {reversed && (
              <TopRowElement
                icon1={<IoIosRewind />}
                textSize="text-md"
                onClick={handleReverse}
                bgColor="hover:bg-green-500 active:bg-green-400"
                currentlySelected={currentlySelected}
              />
            )}
          </div>
          {content.length > 0 && (
            <TopRowElement
              icon1={maxIcon}
              onClick={handleHideContent}
              bgColor="hover:bg-green-500 active:bg-green-400"
              textSize="text-md"
              currentlySelected={currentlySelected}
            />
          )}
        </div>
        <MovingArrowContainer
          currentlySelected={currentlySelected}
          itemPath={itemPath}
        >
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
          <div className="grid grid-cols-2">
            <ViewAddButtons
              handleClick={handleClick}
              showSvgs={showSvgs}
              showImgs={showImgs}
              setShowImgs={handleSetShowImgs}
              setShowSvgs={handleSetShowSvgs}
            />
            <ViewOptionButtons
              showStyles={showStyles}
              setShowStyles={setShowStyles}
              editorOpen={editorOpen}
              handleSetEditorOpen={handleSetEditorOpen}
              copied={copied}
              handleCopySection={handleCopySection}
              handlePasteSection={handlePasteSection}
              handleDelete={() => handleRemoveSection()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TreeButtonView;
