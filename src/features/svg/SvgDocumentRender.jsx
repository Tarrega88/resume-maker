import { Svg } from "@react-pdf/renderer";
import CreateSvgElementReactPdf from "./CreateSvgElementReactPDF";
import getViewBox from "../../helpers/getViewBox";

function SvgDocumentRender({ svg }) {
  return (
    <Svg viewBox={getViewBox(svg.attributes)}>
      {svg.children.map((child) => CreateSvgElementReactPdf(child))}
    </Svg>
  );
}

export default SvgDocumentRender;
