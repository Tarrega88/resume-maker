import { useDispatch, useSelector } from "react-redux";
import { selectImage } from "./imageSlice";
import { addSection } from "../../Creator/sectionCreatorSlice";

function ImagePreviews() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.images);
  // const imagesPresent

  function handleSelectImage(data, i) {
    dispatch(selectImage(i));
    dispatch(
      addSection({
        type: "Image",
        content: data,
        imageId: data.imageId,
      }),
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      {images.length > 0 &&
        images.map((data, i) => (
          <img
            key={i}
            src={data.base64}
            onClick={() => handleSelectImage(data, i)}
            className="h-40 w-max cursor-pointer transition-all duration-300 hover:scale-105"
          />
        ))}
    </div>
  );
}

export default ImagePreviews;
