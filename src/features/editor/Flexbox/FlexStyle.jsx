import { useState } from "react";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import FlexAlignment from "./FlexAlignment";
import FlexWrap from "./FlexWrap";
import SizeBehavior from "./SizeBehavior";
import { useSelector } from "react-redux";
import { getCurrentStyleData } from "../editorSlice";
import { currentPageSize } from "../../Creator/sectionCreatorSlice";

/*
6/3/2024 Notes:

flexDirection - row, row-reverse, column, column-reverse (will just add in a reversal on row and column tree buttons)

NOTE: flexWrap also disables alignItems

//SIZE BEHAVIOR
flexBasis - all measurement values- will probably use the usual page limits here (MultiButton)
flexGrow - numerical values, 0 to 10 (MultiButton)
flexShrink - numerical values, 0 to 10 (MultiButton)
*/

const views = ["Alignment", "Wrap", "Size Behavior"];

function FlexStyle() {
  const styleData = useSelector(getCurrentStyleData);
  const pageSize = useSelector(currentPageSize);

  // const pageSize = useSelector((state) => state.document.pageSize);

  const [currentView, setCurrentView] = useState("Alignment");

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        currentView={currentView}
        views={views}
        setView={setCurrentView}
        // section="Flexbox"
      >
        {currentView === "Alignment" && (
          <FlexAlignment styleData={styleData} pageSize={pageSize} />
        )}
        {currentView === "Wrap" && <FlexWrap styleData={styleData} />}
        {currentView === "Size Behavior" && (
          <SizeBehavior styleData={styleData} pageSize={pageSize} />
        )}
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default FlexStyle;
