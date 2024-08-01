import { useSelector } from "react-redux";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import { getCurrentStyleData } from "../editorSlice";
import FontStyles from "./FontStyles";
import DecorationStyles from "./DecorationStyles";
import SpacingStyles from "./SpacingStyles";
import { useState } from "react";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";

function TextStyle() {
  const styleData = useSelector(getCurrentStyleData);

  const [currentView, setCurrentView] = useState("Font");
  const styleViews = {
    Font: <FontStyles styleData={styleData} />,
    Spacing: <SpacingStyles styleData={styleData} />,
    Decoration: <DecorationStyles styleData={styleData} />,
  };

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        currentView={currentView}
        setView={setCurrentView}
        views={["Font", "Spacing", "Decoration"]}
        section="Text"
      >
        {styleViews[currentView]}
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default TextStyle;
