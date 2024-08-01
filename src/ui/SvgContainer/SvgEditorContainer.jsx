import SvgRowNav from "./SvgRowNav";

function SvgEditorContainer({ currentView, setView, views = [], children }) {
  const activeClass = "text-2xl";
  const inactiveClass =
    "cursor-pointer text-slate-400 transition-all duration-300 hover:scale-110 hover:text-slate-300";
  return (
    <div className="mx-4 h-max w-full">
      <SvgRowNav />
      {/* <StyleRowNav section={section} /> */}
      <div className="relative flex h-16 items-center justify-evenly bg-slate-700 p-2">
        {views.map((view, i) => (
          <div
            key={i}
            className={`${currentView === view ? activeClass : inactiveClass} transition-all duration-300`}
            onClick={() => setView(view)}
          >
            {view}
          </div>
        ))}
      </div>
      <div className="flex h-full items-start justify-center rounded-b-md bg-slate-400 p-6 pt-8">
        {children}
      </div>
    </div>
  );
}

export default SvgEditorContainer;
