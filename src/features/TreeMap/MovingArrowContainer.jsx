import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MoveSectionArrow from "./MoveSectionArrow";
import { useDispatch } from "react-redux";
import {
  moveSectionLeft,
  moveSectionRight,
} from "../Creator/sectionCreatorSlice";

function MovingArrowContainer({ currentlySelected, children }) {
  const dispatch = useDispatch();

  function handleMoveLeft(e) {
    e.stopPropagation();
    dispatch(moveSectionLeft());
  }

  function handleMoveRight(e) {
    e.stopPropagation();
    dispatch(moveSectionRight());
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

export default MovingArrowContainer;
