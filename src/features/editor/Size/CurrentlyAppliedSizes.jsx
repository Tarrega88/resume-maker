import { useSelector } from "react-redux";

function CurrentlyAppliedSizes() {
  const customStyles = useSelector((state) => state.editor.customStyles);
  const styleName = useSelector(
    (state) => state.editor.currentlySelectedCustomStyle,
  );

  const currentStyle = customStyles.find((e) => e.name === styleName);
  return <div className="flex flex-col"></div>;
}

export default CurrentlyAppliedSizes;
