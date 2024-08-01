import { RxCross1 } from "react-icons/rx";

const translateSides = {
  double: {
    right: "translate-x-1/2",
    left: "-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full",
  },
  single: {
    right: "translate-x-full",
    left: "-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full",
  },
};

function TreeButtonExpander({
  text,
  isOpen,
  setToClosed,
  children,
  side = "right",
  double = false,
}) {
  const width = double ? "w-[480px]" : "w-[240px]";

  const translateSideResult = double
    ? translateSides.double[side]
    : translateSides.single[side];

  return (
    <div
      className={`absolute ${isOpen ? `${translateSideResult} opacity-100` : "pointer-events-none opacity-0"} z-10 h-full ${width} overflow-auto bg-slate-800 p-2 text-slate-100 transition-all duration-500`}
    >
      <div className="flex justify-between">
        <div className="border-b pb-2">{text}</div>
        <div
          onClick={setToClosed}
          className="cursor-pointer transition-all duration-100 hover:text-slate-400"
        >
          <RxCross1 />
        </div>
      </div>
      {isOpen && children}
    </div>
  );
}

export default TreeButtonExpander;
