import { useSelector } from "react-redux";
import SvgColorEditor from "./SvgColorEditor";
import SvgRenderer from "./SvgRenderer";
import SvgList from "./SvgList";

function SvgEditor() {
  const svgEditorView = useSelector((state) => state.svgEditor.svgEditorView);

  switch (svgEditorView) {
    case "svgUploader":
      return <SvgRenderer />;
    case "svgList":
      return <SvgList />;
    case "svgEditor":
      return <SvgColorEditor />;
  }
}

export default SvgEditor;
