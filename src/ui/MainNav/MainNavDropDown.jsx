function MainNavDropdown({
  onChange,
  icon,
  children,
  defaultValue = 0,
  borderClass = "border-r",
}) {
  return (
    <div
      className={`relative flex h-full w-full items-center ${borderClass} text-slate-100`}
    >
      <div className="pointer-events-none absolute left-4 text-2xl">{icon}</div>
      <select
        className="h-full w-full cursor-pointer appearance-none items-center bg-slate-700 pl-12 text-center text-sm text-slate-100 outline-none transition-all duration-300 hover:bg-slate-600 2xl:text-base"
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </div>
  );
}

export default MainNavDropdown;
