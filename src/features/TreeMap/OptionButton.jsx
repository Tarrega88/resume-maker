function OptionButton({ text, icon, onClick, active, borderClass }) {
  const bgColor = active
    ? "bg-slate-400 text-slate-800 hover:bg-slate-300 hover:text-slate-700"
    : "bg-slate-600 hover:bg-slate-500 active:bg-slate-400";

  return (
    <div className={`flex w-full flex-col border-t ${borderClass}`}>
      <div className="h-full overflow-y-auto">
        <button
          className={`w-full transition-all duration-300 ${bgColor}`}
          onClick={onClick}
        >
          <div className="flex items-center gap-5">
            <div
              className={`ml-1 flex size-[22px] items-center justify-center border p-[1px] ${active ? "border-slate-800" : ""}`}
            >
              {icon}
            </div>
            <div>{text}</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default OptionButton;
