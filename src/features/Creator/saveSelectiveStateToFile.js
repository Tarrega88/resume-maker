import { saveAs } from "file-saver";
import store from "../../store";
import { documentInitialState } from "./documentSlice";
import { sectionCreatorInitialState } from "./sectionCreatorSlice";
import { svgEditorInitialState } from "../svg/svgEditorSlice";
import { imageInitialState } from "../editor/Image/imageSlice";

const saveSelectiveStateToFile = () => {
  const state = store.getState();

  const selectiveState = {
    document: documentInitialState,
    sectionCreator: sectionCreatorInitialState,
    editor: state.editor,
    svgEditor: svgEditorInitialState,
    image: imageInitialState,
  };

  const stateJson = JSON.stringify(selectiveState, null, 2);
  const blob = new Blob([stateJson], { type: "application/json" });
  saveAs(blob, "selectiveReduxState.json");
};

export default saveSelectiveStateToFile;
