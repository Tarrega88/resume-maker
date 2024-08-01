function TreeButtonNameEditor({
  editorOpen,
  currentlySelected,
  defaultValue,
  onChange,
  onKeyDown,
  placeHolder,
  localName,
}) {
  return editorOpen && currentlySelected ? (
    <div className="my-2 flex justify-center">
      <input
        className="w-full text-center"
        defaultValue={defaultValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeHolder}
      />
    </div>
  ) : (
    <div className="my-2 flex justify-center gap-1">
      <div>{localName}</div>
    </div>
  );
}

export default TreeButtonNameEditor;
