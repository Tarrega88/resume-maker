function ToggleButton({ text, onClick, selected, size = "md" }) {
  const sizes = {
    xs: "w-16 h-12",
    sm: "w-20 h-16",
    md: "w-40 h-16",
    lg: "w-44 h-20",
    xl: "w-60 h-20",
  };

  return (
    <button
      className={` ${selected ? "bg-green-800 hover:bg-green-700" : "bg-gray-600 text-gray-50 opacity-70 hover:bg-gray-500"} ${sizes[size]} rounded-md`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ToggleButton;
