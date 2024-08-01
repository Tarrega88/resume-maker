import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import GeneralPositioning from "./GeneralPositioning";
import { useState } from "react";
import MeasuredPositioning from "./MeasuredPositioning";

const views = ["General", "Measured"];

function LayoutEditor() {
  const [currentView, setCurrentView] = useState("General");

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        views={views}
        currentView={currentView}
        setView={setCurrentView}
      >
        {currentView === "General" && <GeneralPositioning />}
        {currentView === "Measured" && <MeasuredPositioning />}
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default LayoutEditor;
