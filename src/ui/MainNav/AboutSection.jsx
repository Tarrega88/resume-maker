import { useDispatch, useSelector } from "react-redux";
import {
  setDocStarted,
  setShowAbout,
} from "../../features/Creator/documentSlice";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const showAbout = useSelector((state) => state.document.showAbout);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const displayClass = showAbout ? "left-1/2 z-50" : "-left-1/2";

  function handleReturn() {
    dispatch(setDocStarted(true));
    dispatch(setShowAbout(false));
    navigate("/");
  }

  return (
    <div
      className={`absolute top-1/2 ${displayClass} size-80 -translate-x-1/2 -translate-y-1/2 border bg-slate-700 text-slate-50 transition-all duration-700`}
    >
      <div className="flex justify-end pr-2 pt-2 ">
        <div
          className="cursor-pointer transition-all duration-300 hover:text-slate-400"
          onClick={() => dispatch(setShowAbout(false))}
        >
          X
        </div>
      </div>
      <div className="flex flex-col px-8 pt-4">
        <div
          className="cursor-pointer pb-4 underline underline-offset-4 transition-all duration-300 hover:text-slate-400"
          onClick={handleReturn}
        >
          Return to Homepage
        </div>
        <div>Made by Michael See</div>
        <div>michaelseedev@gmail.com</div>
        <div>Thanks for using DocuGen!</div>
      </div>
    </div>
  );
}

export default AboutSection;
