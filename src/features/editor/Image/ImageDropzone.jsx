import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { addImage } from "./imageSlice"; // Adjust the path according to your file structure

const ImageDropzone = ({ setShowDropzone }) => {
  const dispatch = useDispatch();

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const acceptedFile = acceptedFiles[0];
        const fileType = acceptedFile.type;
        if (fileType === "image/png" || fileType === "image/jpeg") {
          const base64 = await getBase64(acceptedFile);
          const fileData = {
            name: acceptedFile.name,
            base64,
            imageId: crypto.randomUUID(),
          };
          dispatch(addImage(fileData));
          setShowDropzone(false);
        } else {
          alert("Only PNG and JPEG files are allowed");
        }
      } else {
        alert("No file was dropped");
      }
    },
    [dispatch, setShowDropzone],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="mt-4 flex h-40 cursor-pointer items-center justify-center border border-dashed transition-all duration-300 hover:bg-slate-700"
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the image here ...</p> : <p>Drop png or jpg</p>}
    </div>
  );
};

export default ImageDropzone;
