import TreeButtonImageSelector from "../../../editor/Image/TreeButtonImageSelector";
import ExpandedStyles from "../../ExpandedStyles";
import SvgPicker from "../../SvgPicker";
import TreeButtonExpander from "../../TreeButtonExpander";

function ViewExpansions({
  showStyles,
  setShowStyles,
  showSvgs,
  setShowSvgs,
  showImgs,
  setShowImgs,
}) {
  return (
    <div>
      <TreeButtonExpander
        text="Applied Styles / Order"
        isOpen={showStyles}
        setToClosed={() => setShowStyles(false)}
        double={true}
      >
        <ExpandedStyles />
      </TreeButtonExpander>
      <TreeButtonExpander
        text="Choose an SVG"
        isOpen={showSvgs}
        side="left"
        setToClosed={setShowSvgs}
      >
        <SvgPicker />
      </TreeButtonExpander>
      <TreeButtonExpander
        text="Choose an IMG"
        isOpen={showImgs}
        side="left"
        setToClosed={setShowImgs}
      >
        <TreeButtonImageSelector />
      </TreeButtonExpander>
    </div>
  );
}

export default ViewExpansions;
