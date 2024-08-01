function SizeInputOrDisplay({ onChange, value }) {
  return (
    <input
      className="h-full w-full border-x-[10px] border-b-[10px] border-x-slate-400 border-b-slate-600 text-center outline-none "
      type="number"
      value={value}
      onKeyDown={(e) =>
        (e.key === "e" || e.key === "E" || e.key === "+") && e.preventDefault()
      }
      onChange={onChange}
    />
  );
}

export default SizeInputOrDisplay;
