import { useDispatch } from "react-redux";
import AddSectionButton from "../../AddSectionButton";
import { addSection } from "../../../Creator/sectionCreatorSlice";
import { FaArrowsAltH, FaArrowsAltV } from "react-icons/fa";
import CustomDeleteButton from "../../CustomDeleteButton";
import { MdDelete } from "react-icons/md";

function PageAddButtons({ handleDelete }) {
  const dispatch = useDispatch();

  function handleClick(type) {
    dispatch(addSection({ type }));
  }

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
      <CustomDeleteButton
        text="Delete"
        icon={<MdDelete />}
        borderClass="border-r"
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default PageAddButtons;
