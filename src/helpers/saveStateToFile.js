import { saveAs } from "file-saver";
import store from "../store";

export const saveStateToFile = () => {
  const reduxState = store.getState();
  const stateJson = JSON.stringify(reduxState, null, 2);
  const blob = new Blob([stateJson], { type: "application/json" });
  saveAs(blob, "reduxState.json");
};
