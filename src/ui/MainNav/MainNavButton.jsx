function MainNavButton({
  text,
  onClick,
  icon,
  to,
  editorView,
  width = "w-full",
}) {
  const dynamicDisplay =
    to === editorView
      ? "bg-slate-500 text-slate-900 hover:text-slate-800 hover:bg-slate-400"
      : "bg-transparent hover:text-slate-50 hover:bg-slate-500";

  return (
    <button
      className={`h-full ${width} border-l ${dynamicDisplay} text-slate-100 last:border-r`}
      onClick={onClick}
    >
      <div className="flex items-center justify-evenly">
        <div className="text-2xl">{icon}</div>
        <div className="text-sm 2xl:text-base">{text}</div>
      </div>
    </button>
  );
}

export default MainNavButton;
