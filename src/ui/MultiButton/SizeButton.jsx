function SizeButton({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="flex w-28 flex-grow items-center justify-center bg-slate-800 text-lg hover:bg-slate-700"
    >
      {text}
    </button>
  );
}

export default SizeButton;
