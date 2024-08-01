import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { IoIosFolderOpen } from "react-icons/io";

const HomeLoadButton = ({ handleNavigate }) => {
  const dispatch = useDispatch();

  function handleLoad() {
    document.querySelector('input[type="file"]').click();
  }

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file && file.type === "application/json") {
      const reader = new FileReader();

      reader.onload = (event) => {
        const stateJson = event.target.result;
        const parsedState = JSON.parse(stateJson);
        dispatch({ type: "LOAD_STATE", payload: parsedState });
        handleNavigate();
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
    <div
      {...getRootProps({ className: "dropzone h-full" })}
      className="size-[340px] border-2 border-slate-700 bg-slate-500 transition-all duration-500 hover:border-slate-200"
    >
      <input {...getInputProps()} />
      <button
        type="button"
        className="flex size-full items-center justify-center bg-transparent text-slate-100 hover:bg-slate-500 hover:text-slate-50"
        onClick={handleLoad}
      >
        <div className="flex items-center justify-evenly gap-4">
          <div className="text-[5rem]">
            <IoIosFolderOpen />
          </div>
          <div className="text-xl">Load Document</div>
        </div>
      </button>
    </div>
  );
};

export default HomeLoadButton;
