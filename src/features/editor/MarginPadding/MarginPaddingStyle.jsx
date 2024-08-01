import { useState } from "react";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import Padding from "./Padding";
import Margin from "./Margin";
import { useSelector } from "react-redux";
import getMaxDimensions from "../../../helpers/getMaxDimensions";
import getHAndWButtonData from "../../../helpers/getHAndWButtonData";
import { getCurrentStyleData } from "../editorSlice";
import { currentPageSize } from "../../Creator/sectionCreatorSlice";
function MarginPaddingStyle() {
  const currentStyle = useSelector(getCurrentStyleData);
  const pageSize = useSelector(currentPageSize);

  const maxDimensionData = getMaxDimensions(pageSize);
  const { heightMeasurements, widthMeasurements } =
    getHAndWButtonData(maxDimensionData);

  const [currentView, setCurrentView] = useState("Margin");
  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        currentView={currentView}
        setView={setCurrentView}
        views={["Margin", "Padding"]}
      >
        {currentView === "Padding" ? (
          <Padding
            pageSize={pageSize}
            currentStyle={currentStyle}
            heightMeasurements={heightMeasurements}
            widthMeasurements={widthMeasurements}
          />
        ) : (
          <Margin
            pageSize={pageSize}
            currentStyle={currentStyle}
            heightMeasurements={heightMeasurements}
            widthMeasurements={widthMeasurements}
          />
        )}
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default MarginPaddingStyle;
