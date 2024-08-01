function GeneralPaperSelect({ text, onClick }) {
  return (
    <div
      className="flex size-[100px] cursor-pointer border bg-white pl-[10px] pt-[10px] font-medium text-black transition-all duration-300 hover:bg-neutral-200"
      onClick={() => onClick(text)}
    >
      {text}
    </div>
  );
}

export default GeneralPaperSelect;
