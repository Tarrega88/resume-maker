import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { addSvg } from "./svgEditorSlice";
import recursiveSvgParse from "./recursiveSvgParse";

export default function SvgRenderer() {
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(e.target.result, "image/svg+xml");

        const svgElement = svgDoc.querySelector("svg");
        const parsedData = recursiveSvgParse(svgElement);

        dispatch(addSvg({ svgName: crypto.randomUUID(), svg: parsedData }));
      };
      reader.readAsText(file);
    } else {
      alert("Please drop a valid SVG file.");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="flex h-[315px] w-[315px] cursor-pointer items-center border border-dashed bg-slate-700 p-6 text-center transition-all duration-300 hover:bg-slate-600"
    >
      <input {...getInputProps()} />

      <p>Select an SVG or upload one here.</p>
    </div>
  );
}
