import { useDispatch, useSelector } from "react-redux";
import StyleRowButton from "./StyleRowButton";
import { setStyleEditorView } from "../../features/editor/editorSlice";
import { CgBorderAll, CgDisplayFlex } from "react-icons/cg";
import { IoMdColorPalette } from "react-icons/io";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { TbBoxMargin } from "react-icons/tb";
import { RxDimensions } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { PiGridFour, PiTextT } from "react-icons/pi";
import { LiaRulerVerticalSolid } from "react-icons/lia";

const generalOptions = [
  {
    title: "New",
    to: "newStyleNamer",
    icon: <IoMdAdd />,
  },
  {
    title: "Select",
    to: "customStyleList",
    icon: <PiGridFour />,
  },
];

const styleSections = [
  {
    title: "Border",
    to: "Borders",
    icon: <CgBorderAll />,
  },
  {
    title: "Color",
    to: "Color",
    icon: <IoMdColorPalette />,
  },
  {
    title: "Flex",
    to: "Flexbox",
    icon: <CgDisplayFlex />,
  },
  {
    title: "Image",
    to: "Images",
    icon: <MdPhotoSizeSelectLarge />,
  },
  {
    title: "M & P",
    to: "Margin/Padding",
    icon: <TbBoxMargin />,
  },
  // {
  //   title: "Morph",
  //   to: "Transformations",
  //   icon: <MdOutlineTransform />,
  // },
  {
    title: "Position",
    to: "Layout",
    icon: <LiaRulerVerticalSolid />,
  },
  {
    title: "Size",
    to: "Dimension",
    icon: <RxDimensions />,
  },
  {
    title: "Text",
    to: "Text",
    icon: <PiTextT />,
  },
];

function StyleRowNav() {
  const dispatch = useDispatch();
  const styleEditorView = useSelector((state) => state.editor.styleEditorView);
  const currentStyle = useSelector(
    (state) => state.editor.currentlySelectedCustomStyle,
  );

  return (
    <div className="flex h-20 w-full justify-between border-slate-600 bg-slate-800">
      <div className="flex h-full items-center">
        {generalOptions.map((e, i) => (
          <StyleRowButton
            key={i}
            text={e.title}
            val={e.to}
            icon={e.icon}
            onClick={() => dispatch(setStyleEditorView(e.to))}
            styleEditorView={styleEditorView}
          />
        ))}
      </div>
      <div className="flex items-center text-2xl">{currentStyle}</div>
      <div className="flex h-full items-center">
        {styleSections.map((e, i) => (
          <StyleRowButton
            key={i}
            text={e.title}
            val={e.to}
            icon={e.icon}
            onClick={() => dispatch(setStyleEditorView(e.to))}
            styleEditorView={styleEditorView}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleRowNav;
