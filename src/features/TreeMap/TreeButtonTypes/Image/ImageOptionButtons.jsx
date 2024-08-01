import { PiPencilDuotone } from "react-icons/pi";
import OptionButton from "../../OptionButton";
import { IoMdCheckmark } from "react-icons/io";
import { BiSolidLayer } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import CustomDeleteButton from "../../CustomDeleteButton";
import { MdDelete } from "react-icons/md";

function ImageOptionButtons({
  showStyles,
  setShowStyles,
  editorOpen,
  handleSetEditorOpen,
  copied,
  handleCopySection,
  handleDelete,
}) {
  return (
    <div className="flex flex-col items-center justify-center">
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
      />
      <CustomDeleteButton
        text="Delete"
        icon={<MdDelete />}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default ImageOptionButtons;
