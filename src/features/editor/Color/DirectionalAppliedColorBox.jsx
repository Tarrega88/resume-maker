import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteStyleProperty, editCustomStyle } from "../editorSlice";

function DirectionalAppliedColorBox({
  text,
  icon,
  topIcon,
  rightIcon,
  bottomIcon,
  leftIcon,
  topProperty,
  rightProperty,
  bottomProperty,
  leftProperty,
  topColorStyle,
  rightColorStyle,
  bottomColorStyle,
  leftColorStyle,
  currentHex,
}) {
  const [displayIcon, setDisplayIcon] = useState(icon);

  const dispatch = useDispatch();

  function handleDynamicDisplay(direction) {
    switch (direction) {
      case "top":
        setDisplayIcon(topIcon);
        break;
      case "right":
        setDisplayIcon(rightIcon);
        break;
      case "bottom":
        setDisplayIcon(bottomIcon);
        break;
      case "left":
        setDisplayIcon(leftIcon);
        break;
    }
  }

  function handleNormalDisplay() {
    setDisplayIcon(icon);
  }

  function handleEditCustomStyle(propertyDirection) {
    dispatch(
      editCustomStyle({
        [propertyDirection]: currentHex,
      }),
    );
  }

  function handleMassEdit() {
    dispatch(
      editCustomStyle({
        [topProperty]: currentHex,
        [rightProperty]: currentHex,
        [bottomProperty]: currentHex,
        [leftProperty]: currentHex,
      }),
    );
  }

  function handleClear() {
    dispatch(deleteStyleProperty(topProperty));
    dispatch(deleteStyleProperty(rightProperty));
    dispatch(deleteStyleProperty(bottomProperty));
    dispatch(deleteStyleProperty(leftProperty));
  }

  return (
    <div className="relative flex size-48 cursor-pointer flex-col border-2 text-lg transition-all duration-150 hover:scale-105">
      <div
        className="flex flex-grow items-center justify-center"
        onMouseEnter={() => handleDynamicDisplay("top")}
        onMouseLeave={handleNormalDisplay}
        style={{
          background: topColorStyle,
        }}
        onClick={() => handleEditCustomStyle(topProperty)}
      >
        <IoIosArrowUp />
      </div>
      <div className="flex h-16 flex-grow">
        <div
          className="flex w-12 items-center justify-center rounded-r-md"
          onMouseEnter={() => handleDynamicDisplay("left")}
          onMouseLeave={handleNormalDisplay}
          style={{
            background: leftColorStyle,
          }}
          onClick={() => handleEditCustomStyle(leftProperty)}
        >
          <IoIosArrowBack />
        </div>
        <div
          className="flex flex-grow flex-col items-center justify-center pb-1 text-[4rem]"
          onClick={handleMassEdit}
        >
          <div>{displayIcon}</div>
          <div className={`z-10 text-base text-slate-50`}>{text}</div>
        </div>
        <div
          className="flex w-12 items-center justify-center rounded-l-md"
          onMouseEnter={() => handleDynamicDisplay("right")}
          onMouseLeave={handleNormalDisplay}
          style={{
            background: rightColorStyle,
          }}
          onClick={() => handleEditCustomStyle(rightProperty)}
        >
          <IoIosArrowForward />
        </div>
      </div>
      <div
        className="flex flex-grow items-center justify-center"
        onMouseEnter={() => handleDynamicDisplay("bottom")}
        onMouseLeave={handleNormalDisplay}
        style={{
          background: bottomColorStyle,
        }}
        onClick={() => handleEditCustomStyle(bottomProperty)}
      >
        <IoIosArrowDown />
      </div>
      <div
        className="absolute right-2 top-2 text-xl font-bold transition-all duration-150 hover:scale-125"
        onClick={handleClear}
      >
        X
      </div>
    </div>
  );
}

export default DirectionalAppliedColorBox;
