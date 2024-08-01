function StylePropertyDisplay({ currentlyHovered = {} }) {
  return (
    <div className="sticky top-4 mt-8 flex h-[80vh] w-full flex-col bg-slate-800 p-4">
      {Object.entries(currentlyHovered).map(([key, val], j) => (
        <div key={j} className="flex gap-x-2">
          <div>{`${key}:`}</div>
          <div>{val}</div>
        </div>
      ))}
    </div>
  );
}

export default StylePropertyDisplay;
