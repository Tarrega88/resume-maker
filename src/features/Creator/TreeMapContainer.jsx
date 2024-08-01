import { useSelector } from "react-redux";
import TreeButtonMaster from "../TreeMap/TreeButtonTypes/MasterDoc/TreeButtonMaster";
import TreeMap from "../TreeMap/TreeMap";

function TreeMapContainer({ data, introText, handleUpdateScroll }) {
  const docName = useSelector((state) => state.sectionCreator.docName);

  return (
    <div className="relative">
      <div className="flex justify-center pb-12 text-2xl">{introText}</div>
      <div className="flex pl-44">
        <TreeButtonMaster
          itemType="View"
          itemContainerType="Master"
          content={[]}
          id="masterId"
          itemPath={[0]}
          itemName={docName}
          currentlySelected={true}
        />
        <TreeMap
          data={data}
          path={[]}
          handleUpdateScroll={handleUpdateScroll}
        />
      </div>
    </div>
  );
}

export default TreeMapContainer;
