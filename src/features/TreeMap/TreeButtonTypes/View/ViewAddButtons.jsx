import { FaArrowsAltH, FaArrowsAltV, FaFileImage } from "react-icons/fa";
import AddSectionButton from "../../AddSectionButton";
import { PiTextAa } from "react-icons/pi";
import { SiSvg } from "react-icons/si";

function ViewAddButtons({
  handleClick,
  showSvgs,
  showImgs,
  setShowImgs,
  setShowSvgs,
}) {
  return (
    <div className="flex flex-col items-center">
      <div>Add</div>
      <AddSectionButton
        text="Row"
        type="Row"
        icon={<FaArrowsAltH />}
        onClick={handleClick}
      />
      <AddSectionButton
        text="Col"
        type="Column"
        icon={<FaArrowsAltV />}
        onClick={handleClick}
      />
      <AddSectionButton
        text="Txt"
        type="Text"
        icon={<PiTextAa />}
        onClick={handleClick}
      />
      <AddSectionButton
        text="SVG"
        type="SVG"
        icon={<SiSvg />}
        onClick={() => setShowSvgs((show) => !show)}
        active={showSvgs}
      />
      <AddSectionButton
        text="IMG"
        type="Image"
        icon={<FaFileImage />}
        onClick={() => setShowImgs((show) => !show)}
        active={showImgs}
      />
    </div>
  );
}

export default ViewAddButtons;
