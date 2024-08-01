import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { FaFolderOpen } from "react-icons/fa";

const LoadStateButton = () => {
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file && file.type === "application/json") {
      const reader = new FileReader();

      reader.onload = (event) => {
        const stateJson = event.target.result;
        const parsedState = JSON.parse(stateJson);
        dispatch({ type: "LOAD_STATE", payload: parsedState });
      };

      reader.readAsText(file);
    } else {
      alert("Please upload a valid JSON file.");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div {...getRootProps({ className: "dropzone h-full" })} className="w-full">
      <input {...getInputProps()} />
      <button
        type="button"
        className="h-full w-full border-l bg-transparent text-slate-100 hover:bg-slate-500 hover:text-slate-50"
        onClick={() => document.querySelector('input[type="file"]').click()}
      >
        <div className="flex items-center justify-evenly">
          <div className="text-2xl">
            <FaFolderOpen />
          </div>
          <div>Load</div>
        </div>
      </button>
    </div>
  );
};

export default LoadStateButton;
