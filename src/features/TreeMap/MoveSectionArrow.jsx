function MoveSectionArrow({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-8 flex-grow items-center justify-center bg-transparent text-3xl bg-blend-overlay transition-all duration-75 hover:scale-125 hover:bg-transparent hover:text-green-100"
    >
      {icon}
    </button>
  );
}

export default MoveSectionArrow;
