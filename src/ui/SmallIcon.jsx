function SmallIcon({ icon, onClick }) {
  return (
    <div
      className="cursor-pointer pr-1 text-xl transition-all duration-200 hover:scale-105 hover:text-slate-100 active:scale-110 active:text-slate-50"
      onClick={onClick}
    >
      {icon}
    </div>
  );
}

export default SmallIcon;
