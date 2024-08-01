import { IoIosPower } from "react-icons/io";

function MultiToggleShutter({ open, onClick }) {
  return (
    <div
      className={`absolute top-16 z-20 ${open ? "translate-y-full" : ""} h-full w-full overflow-hidden bg-slate-700 opacity-70 transition-all duration-300 hover:opacity-50`}
      onClick={onClick}
    >
      <div
        className="flex h-full cursor-pointer justify-center pt-10 text-[8rem] text-slate-400 transition-all duration-300 hover:text-green-700 active:text-green-600"
        // onClick={() => setOpen((open) => !open)}
      >
        <IoIosPower />
      </div>
    </div>
  );
}

export default MultiToggleShutter;
