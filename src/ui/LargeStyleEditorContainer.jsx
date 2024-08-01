function LargeStyleEditorContainer({ introText, children }) {
  return (
    <div className="relative flex h-[80vh] w-full flex-col pb-16 pt-16 text-zinc-100">
      <div className="flex justify-center pb-12 text-2xl">{introText}</div>
      <div className="flex h-full items-start justify-center gap-x-16">
        {children}
      </div>
    </div>
  );
}

export default LargeStyleEditorContainer;
