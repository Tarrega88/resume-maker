import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { addSvg } from "./svgEditorSlice";
import recursiveSvgParse from "./recursiveSvgParse";

export default function SmallRenderer() {
  const [showDropzone, setShowDropzone] = useState(false);
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
        setShowDropzone(false);
      };
      reader.readAsText(file);
    } else {
      alert("Please drop a valid SVG file.");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div
        className="cursor-pointer pt-4 transition-all duration-300 hover:text-slate-400"
        onClick={() => setShowDropzone((show) => !show)}
      >
        {showDropzone ? "Cancel" : "Upload SVG"}
      </div>
      {showDropzone && (
        <div
          className="m-4 flex cursor-pointer justify-center border border-dashed p-4 text-center transition-colors duration-300 hover:bg-slate-600"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p>Drag and drop an SVG file here to display it.</p>
        </div>
      )}
    </div>
  );
}
