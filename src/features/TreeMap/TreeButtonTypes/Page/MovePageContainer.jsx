import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MoveSectionArrow from "../../MoveSectionArrow";
import { useDispatch } from "react-redux";
import { movePage } from "../../../Creator/sectionCreatorSlice";

function MovePageContainer({ currentlySelected, children }) {
  const dispatch = useDispatch();
  function handleMoveLeft(e) {
    e.stopPropagation();
    dispatch(movePage(-1));
  }

  function handleMoveRight(e) {
    e.stopPropagation();
    dispatch(movePage(1));
  }

  return (
    <div className="flex min-h-8 items-center justify-around gap-2">
      {currentlySelected && (
        <MoveSectionArrow
          icon={<MdKeyboardArrowLeft />}
          onClick={handleMoveLeft}
        />
      )}
      {children}
      {currentlySelected && (
        <MoveSectionArrow
          icon={<MdKeyboardArrowRight />}
          onClick={handleMoveRight}
        />
      )}
    </div>
  );
}

export default MovePageContainer;
