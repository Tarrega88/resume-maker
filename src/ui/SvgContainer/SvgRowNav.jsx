import { useDispatch, useSelector } from "react-redux";
import StyleRowButton from "../StyleContainer/StyleRowButton";
import { IoMdAdd } from "react-icons/io";
import { PiGridFour, PiTextT } from "react-icons/pi";
import { setSvgEditorView } from "../../features/svg/svgEditorSlice";

const generalOptions = [
  // {
  //   title: "New",
  //   to: "svgUploader",
  //   icon: <IoMdAdd />,
  // },
  {
    title: "SVGs",
    to: "svgList",
    icon: <PiGridFour />,
  },
];

const svgSections = [
  {
    title: "Edit",
    to: "svgList",
  },
];

function SvgRowNav() {
  const dispatch = useDispatch();
  const svgEditorView = useSelector((state) => state.svgEditor.svgEditorView);

  return (
    <div className="flex h-20 w-full justify-between border-slate-600 bg-slate-800">
      <div className="flex h-full items-center">
        {generalOptions.map((e, i) => (
          <StyleRowButton
            key={i}
            text={e.title}
            val={e.to}
            icon={e.icon}
            onClick={() => dispatch(setSvgEditorView(e.to))}
            styleEditorView={svgEditorView}
          />
        ))}
      </div>
      <div className="flex items-center text-2xl">SVG Editor</div>
      <div className="flex h-full items-center">
        {/* {svgSections.map((e, i) => (
          <StyleRowButton
            key={i}
            text={e.title}
            val={e.to}
            icon={e.icon}
            onClick={() => dispatch(setSvgEditorView(e.to))}
            styleEditorView={svgEditorView}
          />
        ))} */}
      </div>
    </div>
  );
}

export default SvgRowNav;
