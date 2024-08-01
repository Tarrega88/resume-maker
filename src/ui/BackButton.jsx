function BackButton({ onClick }) {
  return (
    <div className="absolute left-2 top-2">
      <button
        onClick={onClick}
        className="w-24 border-2 bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-400"
      >
        Back
      </button>
    </div>
  );
}

export default BackButton;
