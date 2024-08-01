import { saveAs } from "file-saver";
import store from "../../store";
import MainNavButton from "../../ui/MainNav/MainNavButton";

import { IoIosSave } from "react-icons/io";

const saveStateToFile = () => {
  const reduxState = store.getState();
  const stateJson = JSON.stringify(reduxState, null, 2);
  const blob = new Blob([stateJson], { type: "application/json" });
  saveAs(blob, "reduxState.json");
};

const SaveStateButton = () => (
  <MainNavButton
    onClick={saveStateToFile}
    text="Save"
    icon={<IoIosSave />}
    to=""
    width="w-full"
  />
);

export default SaveStateButton;
