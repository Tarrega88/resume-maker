function AddSectionButton({ text, type, icon, onClick, active }) {
  function handleClick(e) {
    e.stopPropagation();
    onClick(type);
  }

  const bgColor = active
    ? "bg-slate-400 text-slate-800 hover:bg-slate-300 hover:text-slate-700"
    : "bg-slate-600 hover:bg-slate-500 active:bg-slate-400";

  return (
    <div className="flex w-full flex-col border-r border-t">
      <div className="h-full overflow-y-auto">
        <button className={`w-full ${bgColor}`} onClick={handleClick}>
          <div className="flex items-center gap-5">
            <div
              className={`ml-1 flex size-[22px] items-center justify-center border ${active ? "border-slate-800" : ""}`}
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

export default AddSectionButton;
