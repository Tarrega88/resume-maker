function StyleRowButton({ text, val, onClick, styleEditorView, size, icon }) {
  const dynamicDisplay =
    val === styleEditorView ? "bg-slate-500" : "bg-transparent";

  const sizes = {
    sm: "w-20",
    md: "w-28",
    lg: "w-36",
    xl: "w-48 text-xl",
  };

  const sizeChoice = sizes[size] || "w-20";

  return (
    <button
      className={`h-full ${sizeChoice} border-slate-600 hover:bg-slate-600 ${dynamicDisplay} w-28 border-l last:border-r`}
      onClick={onClick}
    >
      <div className="flex items-center justify-evenly">
        <div className="text-3xl">{icon}</div>
        <div>{text}</div>
      </div>
    </button>
  );
}

export default StyleRowButton;
