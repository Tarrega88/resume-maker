import { useDispatch, useSelector } from "react-redux";
import MainNavButton from "./MainNavButton";
import {
  setEditorView,
  setPreferredUnitType,
  setStyleEditorView,
} from "../../features/editor/editorSlice";
import { setSvgEditorView } from "../../features/svg/svgEditorSlice";
import {
  setPath,
  turnPageTo,
} from "../../features/Creator/sectionCreatorSlice";
import NavSelector from "./NavSelector";
import logo6 from "../../data/icons/6.svg";
import { ImTree } from "react-icons/im";
import { BiSolidLayer } from "react-icons/bi";
import { SiSvg } from "react-icons/si";
import { RxViewVertical } from "react-icons/rx";

import { IoDocument } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import SaveStateButton from "../../features/Creator/SaveStateButton";
import LoadStateButton from "../../features/Creator/LoadStateButton";
import MainNavDropdown from "./MainNavDropDown";
import PageRatioOptions from "./PageRatioOptions";
import PageOrDocViewSelect from "./PageOrDocViewSelect";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import PreferredMeasurementType from "./PreferredMeasurementType";
import LogoDropdown from "./LogoDropdown";
import SaveSylesButton from "../../features/Creator/SaveStylesButton";

const navButtons = [
  {
    title: "Tree Map",
    to: "tree",
    icon: <ImTree />,
  },
  {
    title: "Style Editor",
    to: "style",
    icon: <BiSolidLayer />,
  },
  {
    title: "SVG Editor",
    to: "svg",
    icon: <SiSvg />,
  },
];

function MainNavRow({
  viewSingle,
  setViewSingle,
  totalPages,
  currentPage,
  pageRatio,
  setPageRatio,
}) {
  const dispatch = useDispatch();

  const editorView = useSelector((state) => state.editor.editorView);

  const preferredUnitType = useSelector(
    (state) => state.editor.preferredUnitType,
  );
  function handleSetUnitType(type) {
    dispatch(setPreferredUnitType(type));
  }

  function handleNavClick(view) {
    dispatch(setEditorView(view));
    switch (view) {
      case "style":
        dispatch(setStyleEditorView("customStyleList"));
        break;
      case "svg":
        dispatch(setSvgEditorView("svgList"));
        break;
      default:
        break;
    }
  }

  function handleChangePage(page) {
    dispatch(turnPageTo(page));
    dispatch(setPath([0]));
  }
  return (
    // <div className="sticky left-0 right-0 flex h-20 w-full justify-between border-b bg-slate-700">
    <div className="sticky left-0 right-0 z-50 flex h-20 w-full justify-between border-b bg-slate-700">
      {/* <div className="flex h-full items-center"> */}
      <LogoDropdown
        icon={<img src={logo6} className="size-[60px] select-none" />}
      />

      {navButtons.map((button, i) => (
        <MainNavButton
          key={i}
          text={button.title}
          onClick={() => handleNavClick(button.to)}
          icon={button.icon}
          to={button.to}
          editorView={editorView}
        />
      ))}
      <SaveStateButton />
      <LoadStateButton />
      <SaveSylesButton />
      {/* </div> */}
      {/* <div className="flex items-center"> */}
      <NavSelector
        length={totalPages}
        onChange={(e) => handleChangePage(Number(e.target.value))}
        currentPage={currentPage}
      />
      <PageOrDocViewSelect
        icon={viewSingle ? <IoDocument /> : <IoDocuments />}
        onChange={setViewSingle}
        defaultValue={viewSingle}
      />
      <MainNavDropdown
        icon={<LiaRulerVerticalSolid />}
        onChange={handleSetUnitType}
        defaultValue={preferredUnitType}
      >
        <PreferredMeasurementType />
      </MainNavDropdown>
      <MainNavDropdown
        icon={<RxViewVertical />}
        onChange={setPageRatio}
        defaultValue={pageRatio}
      >
        <PageRatioOptions />
      </MainNavDropdown>
      {/* </div> */}
    </div>
  );
}

export default MainNavRow;
