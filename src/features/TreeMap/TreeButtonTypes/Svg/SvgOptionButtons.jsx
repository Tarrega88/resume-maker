import { MdDelete } from "react-icons/md";
import CustomDeleteButton from "../../CustomDeleteButton";
import OptionButton from "../../OptionButton";
import { PiPencilDuotone } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

function SvgOptionButtons({
  handleDelete,
  copied,
  handleCopySection,
  editorOpen,
  handleSetEditorOpen,
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>Options</div>
      <div className="flex w-full">
        <OptionButton
          text={`${copied ? "Copied" : "Copy"}`}
          onClick={handleCopySection}
          icon={<IoCopyOutline />}
          borderClass="border-r"
        />
        <OptionButton
          text={`${!editorOpen ? "Edit" : "Done"}`}
          active={editorOpen}
          icon={!editorOpen ? <PiPencilDuotone /> : <IoMdCheckmark />}
          onClick={handleSetEditorOpen}
        />
      </div>
      <CustomDeleteButton
        text="Delete"
        icon={<MdDelete />}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default SvgOptionButtons;
