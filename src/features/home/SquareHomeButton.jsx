function SquareHomeButton({ text, icon, onClick }) {
  return (
    <div
      className="flex size-[340px] cursor-pointer items-center justify-center gap-1 rounded-sm border-2 border-slate-700 bg-slate-500 p-8 text-xl text-slate-100 transition-all duration-500 hover:border-slate-300"
      onClick={onClick}
    >
      <div className="px-1 pb-2 text-[6rem]">{icon}</div>
      <div className="text-xl">{text}</div>
    </div>
  );
}

export default SquareHomeButton;
