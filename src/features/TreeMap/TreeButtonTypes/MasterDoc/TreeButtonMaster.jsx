import { useDispatch, useSelector } from "react-redux";
import { setDocName } from "../../../Creator/sectionCreatorSlice";
import { PiPencilDuotone } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import AddSectionButton from "../../AddSectionButton";
import OptionButton from "../../OptionButton";
import { BiSolidLayer } from "react-icons/bi";
import TreeButtonExpander from "../../TreeButtonExpander";
import { IoDocumentOutline } from "react-icons/io5";
import { ImTree } from "react-icons/im";
import TopRowElement from "../../TopRowElement";
import TreeButtonNameEditor from "../../TreeButtonNameEditor";
import AddPageExpanded from "../../AddPage/AddPageExpanded";
import DocExpandedStyles from "../../DocExpandedStyles";

function TreeButtonMaster({
  id,
  itemContainerType,
  itemName,
  currentlySelected,
  parentSelected,
}) {
  const dispatch = useDispatch();
  const [editorOpen, setEditorOpen] = useState(false);
  const [localName, setLocalName] = useState(itemName);
  const copiedId = useSelector((state) => state.sectionCreator.copiedId);

  const copied = id === copiedId;

  const [showStyles, setShowStyles] = useState(false);
  const [showAddPage, setShowAddPage] = useState(false);

  const icon = {
    Page: <IoDocumentOutline />,
    Master: <ImTree />,
  };

  function handleChangeName(e) {
    if (e.code !== "Enter") return;
    setEditorOpen(false);
    dispatch(setDocName(localName));
  }
  // function handleButtonClick() {
  //   if (!currentlySelected) dispatch(setPath(itemPath));
  // }

  function handleSetEditorOpen(e) {
    e.stopPropagation();
    dispatch(setDocName(localName));
    setEditorOpen((open) => !open);
  }

  return (
    <div className="relative">
      {currentlySelected && (
        <>
          <TreeButtonExpander
            text="Applied Styles / Order"
            isOpen={showStyles}
            setToClosed={() => setShowStyles(false)}
            double={true}
          >
            <DocExpandedStyles />
          </TreeButtonExpander>
          <TreeButtonExpander
            text="Select Page Size"
            isOpen={showAddPage}
            setToClosed={() => setShowAddPage(false)}
          >
            <AddPageExpanded />
          </TreeButtonExpander>
        </>
      )}
      <div
        className={`relative mb-2 flex min-h-12 w-60 cursor-pointer flex-col border-2 transition-all duration-300 ${copied ? "border-2 border-dashed border-blue-600" : ""} text-gray-100 transition-all duration-300 ${currentlySelected ? "bg-emerald-700" : parentSelected ? "bg-slate-600 hover:bg-slate-500" : "bg-gray-500 hover:bg-gray-600"} relative`}
        // onClick={handleButtonClick}
        // onMouseEnter={() => dispatch(setPath(itemPath))}
      >
        <div className="mb-2 flex flex-grow justify-between p-1">
          <TopRowElement icon1={icon[itemContainerType]} textSize="text-md" />
        </div>
        <div className="flex min-h-8 items-center justify-around gap-2">
          <TreeButtonNameEditor
            editorOpen={editorOpen}
            currentlySelected={currentlySelected}
            defaultValue={localName}
            onChange={(e) => setLocalName(e.target.value)}
            onKeyDown={handleChangeName}
            placeHolder="Renaming..."
            localName={localName ? localName : "Master Document"}
          />
        </div>
        {currentlySelected && (
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center">
              <div>Add</div>
              <AddSectionButton
                text="Page"
                type="Page"
                icon={icon.Page}
                onClick={() => setShowAddPage((show) => !show)}
              />
            </div>

            <div className="flex flex-col items-center">
              <div>Options</div>
              <OptionButton
                text="Styles"
                icon={<BiSolidLayer />}
                active={showStyles}
                onClick={() => setShowStyles((show) => !show)}
              />
              <OptionButton
                text={`${!editorOpen ? "Edit" : "Done"}`}
                icon={!editorOpen ? <PiPencilDuotone /> : <IoMdCheckmark />}
                active={editorOpen}
                onClick={handleSetEditorOpen}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TreeButtonMaster;
