/*
maxes will be tied to page size again, like the other sizes

//%, pt, vw, vh, in, cm, mm
Could do top and bottom linked here too, as well as an "all" option - should consider breaking these into
borderTopLeftRadius (MultiButton)
borderTopRightRadius (MultiButton)
borderBottomRightRadius (MultiButton)
borderBottomLeftRadius (MultiButton)

*/

import { useState } from "react";
import LargeStyleEditorContainer from "../../../ui/LargeStyleEditorContainer";
import StyleSelectorRibbon from "../../../ui/StyleContainer/StyleSelectorRibbon";
import BorderStyleApplicator from "./BorderStyleApplicator";
import BorderWidthApplicator from "./BorderWidthApplicator";
import BorderRadiusApplicator from "./BorderRadiusApplicator";

function BordersStyle() {
  const [view, setView] = useState("Width");

  return (
    <LargeStyleEditorContainer>
      <StyleSelectorRibbon
        currentView={view}
        setView={setView}
        views={["Width", "Style", "Radius"]}
        // section="Borders"
      >
        {view === "Style" && <BorderStyleApplicator />}
        {view === "Width" && <BorderWidthApplicator />}
        {view === "Radius" && <BorderRadiusApplicator />}
      </StyleSelectorRibbon>
    </LargeStyleEditorContainer>
  );
}

export default BordersStyle;
