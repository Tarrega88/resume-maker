import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import ImageStyleOptions from "./ImageStyleOptions";

/*
Maybe have the image uploader (ImageDropzone) here too?
object-fit
object-position
*/
function ImagesStyle() {
  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        views={["Image Styling"]}
        currentView="Image Styling"
      >
        <ImageStyleOptions />
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default ImagesStyle;
