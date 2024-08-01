function NavSelector({ length, onChange, currentPage }) {
  return (
    <div className="flex w-full items-center border-l">
      <select
        onChange={onChange}
        value={currentPage}
        className="mx-4 h-2/5 w-full rounded-sm bg-slate-500 text-slate-200 outline-none transition-all duration-300"
      >
        {Array.from({ length }, (_, i) => (
          <option key={i} value={i}>
            Page {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default NavSelector;
