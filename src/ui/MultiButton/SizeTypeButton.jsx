function SizeTypeButton({ unitType = "pt", setUnitType, validTypes }) {
  return (
    <select
      className="active-border-t-slate-500 w-full border-x-[10px] border-b-[10px] border-t-[10px] border-x-slate-300 border-b-slate-500 border-t-slate-400 bg-zinc-600 text-center text-sm outline-none transition-all duration-200 hover:bg-zinc-500 active:border-x-slate-400 active:border-b-slate-600 active:bg-zinc-700"
      onChange={(e) => setUnitType(e.target.value)}
      // onClick={setUnitType}
      value={unitType}
    >
      {validTypes.map((type, i) => (
        <option key={i} value={type}>
          {type}
        </option>
      ))}
      {unitType}
    </select>
  );
}

export default SizeTypeButton;
