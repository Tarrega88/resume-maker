import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function DownUpArrows({ text, downArrowClick, upArrowClick, textClick }) {
  return (
    <div className="flex gap-2">
      <div className="flex items-center">
        <div
          onClick={downArrowClick}
          className="cursor-pointer text-2xl transition-all duration-100 hover:text-slate-400"
        >
          <MdArrowDropDown />
        </div>
        <div
          onClick={upArrowClick}
          className="cursor-pointer text-2xl transition-all duration-100 hover:text-slate-400"
        >
          <MdArrowDropUp />
        </div>
      </div>
      <div
        onClick={textClick}
        className="cursor-pointer transition-all duration-300 hover:text-slate-300"
      >
        {text}
      </div>
    </div>
  );
}

export default DownUpArrows;
