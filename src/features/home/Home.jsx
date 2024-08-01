import { useNavigate } from "react-router-dom";
import logo from "../../data/icons/6.svg";
import HomeLoadButton from "./HomeLoadButton";
import SquareHomeButton from "./SquareHomeButton";
import { IoIosCreate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setDocStarted } from "../Creator/documentSlice";
import { IoMdPlay } from "react-icons/io";
import { CgTemplate } from "react-icons/cg";
import { useState } from "react";
import Templates from "./Templates";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showTemplates, setShowTemplates] = useState(false);

  const docStarted = useSelector((state) => state.document.docStarted);

  function handleNavigate() {
    dispatch(setDocStarted(true));
    navigate("/creator");
  }

  return (
    <div className="grid h-screen grid-cols-[1fr_auto_1fr] bg-slate-700">
      <div className="flex h-max items-center gap-4 pl-4 pt-4">
        <img src={logo} className="w-40" />
        <div className="text-[2rem] text-slate-100">DocuGen</div>
      </div>
      {showTemplates ? (
        <Templates
          setShowTemplates={setShowTemplates}
          handleNavigate={handleNavigate}
        />
      ) : (
        <div className="flex items-center justify-center gap-16">
          <SquareHomeButton
            text={docStarted ? "Resume Document" : "New Document"}
            icon={docStarted ? <IoMdPlay /> : <IoIosCreate />}
            onClick={handleNavigate}
          />
          <HomeLoadButton handleNavigate={handleNavigate} />
          <SquareHomeButton
            text="Templates"
            icon={<CgTemplate />}
            onClick={() => setShowTemplates(true)}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
