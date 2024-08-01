function TopRowElement({
  icon1,
  icon2,
  showIcon1,
  onClick,
  bgColor = "bg-green-600",
  textColor = "text-zinc-100",
  textSize = "text-xl",
  currentlySelected,
}) {
  const allColor = currentlySelected
    ? `${bgColor} ${textColor}`
    : `bg-transparent text-zinc-100`;

  const multipleIcons = icon1 && icon2 ? true : false;

  return (
    <div
      className={`border-2 ${allColor} flex size-6 items-center justify-center p-[1px] transition-all duration-200 ${textSize}`}
      onClick={onClick}
    >
      {multipleIcons ? (showIcon1 ? icon1 : icon2) : icon1}
    </div>
  );
}

export default TopRowElement;
