function LargeGridButton({
  title,
  icon,
  onClick,
  size = "large",
  bgColor = "bg-zinc-700",
  bgHoverColor = "hover:bg-zinc-600",
  bgActiveColor = "active:bg-zinc-500",
}) {
  const sizes = {
    large: { square: "size-64", icon: "text-7xl", text: "text-xl" },
    medium: { square: "size-48", icon: "text-6xl", text: "text-xl" },
    small: { square: "size-40", icon: "text-4xl", text: "text-lg" },
  };

  return (
    <button
      className={`flex ${sizes[size].square} flex-col items-center justify-center gap-4 border-2 ${bgColor} p-2 duration-200 ${bgHoverColor} ${bgActiveColor}`}
      onClick={onClick}
    >
      <div className={`p-2 ${sizes[size].icon} text-zinc-50`}>{icon}</div>
      <div className={`${sizes[size].text}`}>{title}</div>
    </button>
  );
}

export default LargeGridButton;
