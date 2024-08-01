import MainNavButton from "../../ui/MainNav/MainNavButton";

import { PiFileCssFill } from "react-icons/pi";
import saveSelectiveStateToFile from "./saveSelectiveStateToFile";

const SaveSylesButton = () => (
  <MainNavButton
    onClick={saveSelectiveStateToFile}
    text="Save Styles"
    icon={<PiFileCssFill />}
    to=""
    // width="w-28"
  />
);

export default SaveSylesButton;
