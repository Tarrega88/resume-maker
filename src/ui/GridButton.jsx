function GridButton({
  title,
  subTitle,
  icon,
  onClick,
  onMouseEnter,
  onMouseLeave,
  size,
}) {
  const sizes = {
    xs: "size-24",
    sm: "size-40",
    md: "size-48",
    lg: "size-64",
  };

  const sizeSelection = sizes[size] || "size-64";

  return (
    <button
      className={`flex ${sizeSelection} flex-col items-center justify-evenly border-2 bg-slate-700 p-2 duration-300 hover:bg-slate-600`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="overflow-auto">{title}</div>
      {icon && <div className="p-2 text-5xl text-zinc-50">{icon}</div>}
      {subTitle && <div className="text-sm">{subTitle}</div>}
    </button>
  );
}

export default GridButton;
