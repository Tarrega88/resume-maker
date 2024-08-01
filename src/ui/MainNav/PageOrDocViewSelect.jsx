const options = ["Doc", "Page"];

function PageOrDocViewSelect({ onChange, icon, defaultValue }) {
  return (
    <div className="relative flex h-full w-full items-center border-x text-slate-100">
      <div className="pointer-events-none absolute left-4 select-none text-2xl">
        {icon}
      </div>
      <select
        className="h-full w-full cursor-pointer appearance-none items-center bg-slate-700 pl-[42px] text-center text-slate-100 outline-none transition-all duration-300 hover:bg-slate-600"
        onChange={(e) => onChange(e.target.value % 2 === 1)}
        defaultValue={defaultValue}
      >
        {options.map((option, i) => (
          <option className="text-center" key={i} value={i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PageOrDocViewSelect;
