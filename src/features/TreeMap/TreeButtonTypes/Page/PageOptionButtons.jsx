import { BiSolidLayer } from "react-icons/bi";
import OptionButton from "../../OptionButton";
import { PiPencilDuotone } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { IoCopy } from "react-icons/io5";

function PageOptionButtons({
  showStyles,
  setShowStyles,
  editorOpen,
  handleSetEditorOpen,
  handlePasteSection,
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
        text="Paste"
        onClick={handlePasteSection}
        icon={<IoCopy />}
      />
    </div>
  );
}

export default PageOptionButtons;
