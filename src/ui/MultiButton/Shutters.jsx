import { useState } from "react";
import { IoIosPower } from "react-icons/io";

function Shutters({ open, setOpen }) {
  const [hovered, setHovered] = useState(false);
  const textColor = hovered ? "text-green-700" : "text-neutral-700";

  return (
    <>
      <div
        className={`absolute left-2 top-2 h-[124px] ${open ? "w-0" : "w-[48%]"} ${textColor} z-20 cursor-pointer overflow-hidden bg-slate-900 transition-all duration-300`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={setOpen}
      >
        <div
          className={`absolute left-[98%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl transition-all duration-100`}
        >
          <IoIosPower />
        </div>
      </div>
      <div
        className={`absolute left-1/2 top-0 w-24 bg-slate-500 ${open ? "h-0" : "h-[140px]"} z-10 -translate-x-1/2 transition-all duration-300`}
      ></div>
      <div
        className={`absolute right-2 top-2 h-[124px] ${open ? "w-0" : "w-[48%]"} ${textColor} z-20 cursor-pointer overflow-hidden bg-slate-900 transition-all duration-300`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={setOpen}
      >
        <div
          className={`absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2 text-6xl transition-all duration-100`}
        >
          <IoIosPower />
        </div>
      </div>
    </>
  );
}

export default Shutters;
