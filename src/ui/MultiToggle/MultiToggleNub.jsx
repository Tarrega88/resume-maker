import { IoIosPower } from "react-icons/io";

function MultiToggleNub({ onClick, visible }) {
  return (
    <div
      className={`absolute right-0 ${visible ? "translate-x-full" : ""} top-0 flex size-8 cursor-pointer items-center justify-center rounded-bl-lg bg-slate-600 text-2xl text-green-600 transition-all duration-200 hover:text-green-500`}
      onClick={onClick}
    >
      <IoIosPower />
    </div>
  );
}

export default MultiToggleNub;
