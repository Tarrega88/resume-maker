/*

transform:scaleX
transform:scaleY

transform:rotate
transform:skewX
transform:skewY

transform:matrix - this works but will require several buttons to change numbers for it
transformOrigin - this would also require several buttons to change numbers just inside of its property

these will either be skipped (seems like translation isn't accurate) or at least restricted down to measurements units ?:
transform:translateX
transform:translateY
*/

import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";

const views = ["Scale", "Rotate and Skew"];

function TransformationStyle() {
  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        views={["Transformations Placeholder"]}
        currentView="Transformations Placeholder"
      ></StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default TransformationStyle;
