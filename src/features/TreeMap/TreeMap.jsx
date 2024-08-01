import { useSelector } from "react-redux";
import TreeButtonView from "./TreeButtonTypes/View/TreeButtonView";
import TreeButtonPage from "./TreeButtonTypes/Page/TreeButtonPage";
import TreeButtonImage from "./TreeButtonTypes/Image/TreeButtonImage";
import TreeButtonSvg from "./TreeButtonTypes/Svg/TreeButtonSvg";
import TreeButtonText from "./TreeButtonTypes/Text/TreeButtonText";

function TreeMap({ data, path = [], handleUpdateScroll }) {
  const stringPath = useSelector(
    (state) => state.sectionCreator.destinationPath,
  ).join("-");

  const showAllContent = useSelector(
    (state) => state.sectionCreator.showAllContent,
  );

  return (
    <div className="relative flex w-max justify-center gap-6 p-8">
      {data?.map((item, index) => {
        const currentPath = [...path, index];
        const itemPathString = currentPath.join("-");
        const showBorder =
          itemPathString !== "0" && item.type === "View" && item.content.length;

        switch (true) {
          case item.type === "View":
            return (
              <div
                key={index}
                className={`flex flex-col p-4 ${showBorder && (showAllContent || !item.hideContent) ? "border" : ""} ${stringPath === itemPathString && item.content.length ? "bg-gray-600" : ""} transition-colors duration-300`}
              >
                {(item.containerType === "Row" ||
                  item.containerType === "Column") && (
                  <TreeButtonView
                    id={item.id}
                    itemContainerType={item?.containerType || "Container"}
                    itemName={item?.name}
                    itemPath={currentPath}
                    currentlySelected={stringPath === itemPathString}
                    parentSelected={
                      stringPath === currentPath.slice(0, -1).join("-")
                    }
                    content={item.content}
                    key={item.id}
                    showContent={!item.hideContent}
                    reversed={item.reversed}
                    handleUpdateScroll={handleUpdateScroll}
                  />
                )}
                {item.containerType === "Page" && (
                  <TreeButtonPage
                    id={item.id}
                    itemContainerType={item?.containerType || "Container"}
                    itemName={item?.name}
                    itemPath={currentPath}
                    currentlySelected={stringPath === itemPathString}
                    parentSelected={
                      stringPath === currentPath.slice(0, -1).join("-")
                    }
                    content={item.content}
                    key={item.id}
                    showContent={!item.hideContent}
                    handleUpdateScroll={handleUpdateScroll}
                  />
                )}
                {(item.content.length && showAllContent) ||
                !item.hideContent ? (
                  <TreeMap
                    data={item?.content}
                    path={currentPath}
                    key={stringPath}
                    handleUpdateScroll={handleUpdateScroll}
                  />
                ) : null}
              </div>
            );
          case item.type === "Text":
            return (
              <div
                className={`flex flex-col ${showBorder ? "border p-4" : "pt-4"}`}
                key={index}
              >
                <TreeButtonText
                  id={item.id}
                  itemContainerType={item?.containerType}
                  itemName={item?.name}
                  itemPath={currentPath}
                  currentlySelected={stringPath === itemPathString}
                  parentSelected={
                    stringPath === currentPath.slice(0, -1).join("-")
                  }
                  content={item.content}
                  key={item.id}
                  handleUpdateScroll={handleUpdateScroll}
                />
              </div>
            );
          case item.type === "SVG":
            return (
              <div
                className={`flex flex-col ${showBorder ? "border p-4" : "pt-4"}`}
                key={index}
              >
                <TreeButtonSvg
                  id={item.id}
                  itemContainerType={item?.containerType}
                  itemName={item?.name}
                  itemPath={currentPath}
                  currentlySelected={stringPath === itemPathString}
                  parentSelected={
                    stringPath === currentPath.slice(0, -1).join("-")
                  }
                  key={item.id}
                  svgName={item.svgName}
                  handleUpdateScroll={handleUpdateScroll}
                />
              </div>
            );
          case item.type === "Image":
            return (
              <div
                className={`flex flex-col ${showBorder ? "border p-4" : "pt-4"}`}
                key={index}
              >
                <TreeButtonImage
                  id={item.id}
                  itemContainerType={item?.containerType}
                  itemName={item?.name}
                  itemPath={currentPath}
                  currentlySelected={stringPath === itemPathString}
                  parentSelected={
                    stringPath === currentPath.slice(0, -1).join("-")
                  }
                  key={item.id}
                  handleUpdateScroll={handleUpdateScroll}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default TreeMap;
