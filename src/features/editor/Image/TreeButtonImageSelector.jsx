import { useState } from "react";
import ImageDropzone from "./ImageDropzone";
import ImagePreviews from "./ImagePreviews";

function TreeButtonImageSelector() {
  const [showDropzone, setShowDropzone] = useState(false);
  return (
    <div
      className="cursor-pointer pt-4 transition-all duration-300 hover:text-slate-400"
      onClick={() => setShowDropzone((show) => !show)}
    >
      {showDropzone ? "Cancel" : "Upload Image"}
      <div className="flex flex-col gap-4 px-1">
        {showDropzone && <ImageDropzone setShowDropzone={setShowDropzone} />}

        <ImagePreviews />
      </div>
    </div>
  );
}

export default TreeButtonImageSelector;
