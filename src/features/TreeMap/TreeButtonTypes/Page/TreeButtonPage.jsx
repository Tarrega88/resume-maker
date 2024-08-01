import { FaArrowsAltV } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  editName,
  setPath,
  pasteSection,
  hideContent,
  removePage,
} from "../../../Creator/sectionCreatorSlice";

import { useState } from "react";

import TreeButtonExpander from "../../TreeButtonExpander";
import ExpandedStyles from "../../ExpandedStyles";

import { IoDocumentOutline } from "react-icons/io5";

import { FaRegWindowRestore } from "react-icons/fa6";
import { FaRegWindowMaximize } from "react-icons/fa6";
import TopRowElement from "../../TopRowElement";
import TreeButtonNameEditor from "../../TreeButtonNameEditor";

import PageAddButtons from "./PageAddButtons";
import PageOptionButtons from "./PageOptionButtons";
import MovePageContainer from "./MovePageContainer";

function TreeButtonPage({
  id,
  itemContainerType,
  itemName,
  itemPath,
  currentlySelected,
  parentSelected,
  content,
  showContent,
  handleUpdateScroll,
}) {
  const dispatch = useDispatch();
  const [editorOpen, setEditorOpen] = useState(false);
  const [localName, setLocalName] = useState(itemName);
  const currentPage = useSelector((state) => state.sectionCreator.currentPage);

  const copiedId = useSelector((state) => state.sectionCreator.copiedId);

  const copied = id === copiedId;
  const [showStyles, setShowStyles] = useState(false);

  const maxIcon = showContent ? (
    <FaRegWindowRestore />
  ) : (
    <FaRegWindowMaximize />
  );

  const icon = {
    Page: <IoDocumentOutline />,
    Row: <FaArrowsAltH />,
    Column: <FaArrowsAltV />,
  };

  function handleChangeName(e) {
    if (e.code !== "Enter") return;
    setEditorOpen(false);
    dispatch(editName(localName));
  }

  function handlePasteSection() {
    dispatch(pasteSection());
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

  function handleHideContent() {
    if (currentlySelected && content.length > 0) {
      dispatch(hideContent());
    }
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
          <TopRowElement icon1={icon[itemContainerType]} textSize="text-md" />
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
        <MovePageContainer currentlySelected={currentlySelected}>
          <TreeButtonNameEditor
            editorOpen={editorOpen}
            currentlySelected={currentlySelected}
            defaultValue={localName}
            onChange={(e) => setLocalName(e.target.value)}
            onKeyDown={handleChangeName}
            placeHolder={`${itemContainerType} Name`}
            localName={
              localName ? localName : `${itemContainerType} ${currentPage + 1}`
            }
          />
        </MovePageContainer>
        {currentlySelected && (
          <div className="grid grid-cols-2">
            <PageAddButtons handleDelete={() => dispatch(removePage())} />
            <PageOptionButtons
              showStyles={showStyles}
              setShowStyles={setShowStyles}
              editorOpen={editorOpen}
              handleSetEditorOpen={handleSetEditorOpen}
              // handleDelete={() => dispatch(removePage())}
              handlePasteSection={handlePasteSection}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TreeButtonPage;
