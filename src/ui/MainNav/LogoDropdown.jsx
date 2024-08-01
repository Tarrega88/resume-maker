import { useDispatch, useSelector } from "react-redux";
import { setShowAbout } from "../../features/Creator/documentSlice";

function LogoDropdown({ icon }) {
  const showAbout = useSelector((state) => state.document.showAbout);
  const dispatch = useDispatch();

  return (
    <div className="relative flex h-full w-full items-center text-slate-100">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-2xl">
        {icon}
      </div>
      <div
        className="h-full w-full cursor-pointer appearance-none items-center bg-slate-700 pl-[40px] text-slate-100 outline-none transition-all duration-300 hover:bg-slate-600"
        onClick={() => dispatch(setShowAbout(!showAbout))}
      ></div>
    </div>
  );
}

export default LogoDropdown;
