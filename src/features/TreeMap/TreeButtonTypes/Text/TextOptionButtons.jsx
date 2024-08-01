import { BiSolidLayer } from "react-icons/bi";
import OptionButton from "../../OptionButton";
import { IoCopyOutline } from "react-icons/io5";
import CustomDeleteButton from "../../CustomDeleteButton";
import { MdDelete } from "react-icons/md";
import { PiPencilDuotone } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";

function TextOptionButtons({
  showStyles,
  setShowStyles,
  editorOpen,
  handleSetEditorOpen,
  copied,
  handleCopySection,
  handleDelete,
}) {
  return (
    <div className="flex flex-col items-center">
      <div>Options</div>
      <OptionButton
        text="Styles"
        icon={<BiSolidLayer />}
        onClick={() => setShowStyles((show) => !show)}
        active={showStyles}
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
      />
      <CustomDeleteButton
        text="Delete"
        icon={<MdDelete />}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default TextOptionButtons;
