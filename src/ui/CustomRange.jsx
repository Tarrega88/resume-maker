function CustomRange({
  value,
  setValue,
  min = 0,
  max = 100,
  width = "full",
  text,
  valueType,
  disabled = false,
  vertical = false,
}) {
  const widthOptions = {
    xs: "w-24",
    sm: "w-40",
    md: "w-60",
    lg: "w-80",
    xl: "w-96",
    full: "w-full",
    max: "w-max",
    fit: "w-fit",
    auto: "w-auto",
  };

  return (
    <div className={`relative ${widthOptions[width]}`}>
      <div className="text-center text-lg">{text}</div>
      <div
        className={`absolute left-1/2 -translate-x-1/2 ${text ? "top-10" : "top-3"} pointer-events-none`}
      >
        {value}
        {valueType ? valueType : ""}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        className={`h-12 cursor-pointer appearance-none rounded-full ${disabled ? "pointer-events-none cursor-none bg-gray-600 opacity-50" : "bg-zinc-700"} ${vertical ? "rotate-90" : ""} ${widthOptions[width]}`}
      />
    </div>
  );
}

export default CustomRange;
