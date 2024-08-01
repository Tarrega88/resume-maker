import { BiSolidLayer } from "react-icons/bi";
import OptionButton from "../../OptionButton";
import { PiPencilDuotone } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import CustomDeleteButton from "../../CustomDeleteButton";
import { MdDelete } from "react-icons/md";

function ViewOptionButtons({
  showStyles,
  setShowStyles,
  editorOpen,
  handleSetEditorOpen,
  copied,
  handleCopySection,
  handlePasteSection,
  handleDelete,
}) {
  return (
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
      <OptionButton
        text={`${copied ? "Copied" : "Copy"}`}
        onClick={handleCopySection}
        icon={<IoCopyOutline />}
        active={copied}
      />
      <OptionButton
        text="Paste"
        onClick={handlePasteSection}
        icon={<IoCopy />}
      />
      <CustomDeleteButton
        text="Delete"
        icon={<MdDelete />}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default ViewOptionButtons;
