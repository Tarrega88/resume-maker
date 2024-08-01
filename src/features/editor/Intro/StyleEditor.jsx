import TextStyle from "../Text/TextStyle";
import ImagesStyle from "../Image/ImagesStyle";
import MarginPaddingStyle from "../MarginPadding/MarginPaddingStyle";
// import TransformationStyle from "../Transformation/TransformationStyle";
import BordersStyle from "../Border/BordersStyle";
import { useSelector } from "react-redux";
// import StyleIntro from "./StyleIntro";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import NewStyleNamer from "./NewStyleNamer";
import CustomStyleList from "./CustomStyleList";
import SomeColors from "../Color/SomeColors";
import FlexStyle from "../Flexbox/FlexStyle";
import SizeStyle from "../Size/SizeStyle";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import LayoutEditor from "../Layout/LayoutEditor";

function StyleEditor() {
  const styleEditorView = useSelector((state) => state.editor.styleEditorView);

  //Will need to make it so clicking on Create New Style forces a name creation for that style, and then runs a check to make sure that name is not already set.
  switch (styleEditorView) {
    case "base":
      return null;
    case "newStyleNamer":
      return <NewStyleNamer />;
    case "customStyleList":
      return <CustomStyleList />;
    case "newStylePicker":
      return (
        <LargeStyleEditorContainer>
          <StyleSelectorRibbon currentView="" />
        </LargeStyleEditorContainer>
      );
    case "Layout":
      return <LayoutEditor />;
    case "Flexbox":
      return <FlexStyle />;
    case "Dimension":
      return <SizeStyle />;
    case "Color":
      return <SomeColors />;
    case "Text":
      return <TextStyle />;
    case "Images":
      return <ImagesStyle />;
    case "Margin/Padding":
      return <MarginPaddingStyle />;
    // case "Transformations":
    //   return <TransformationStyle />;
    case "Borders":
      return <BordersStyle />;
  }
}

export default StyleEditor;
