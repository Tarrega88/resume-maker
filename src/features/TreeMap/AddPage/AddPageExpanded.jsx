import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPage } from "../../Creator/sectionCreatorSlice";
import GeneralPaperSelect from "./GeneralPaperSelect";

const paperSizes = [
  {
    category: "Common",
    sizeNames: ["A4", "A5", "B5", "LETTER"],
  },
  {
    category: "A",
    sizeNames: [
      "A0",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
    ],
  },
  {
    category: "B",
    sizeNames: [
      "B0",
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "B8",
      "B9",
      "B10",
    ],
  },
  {
    category: "C",
    sizeNames: [
      "C0",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "C7",
      "C8",
      "C9",
      "C10",
    ],
  },
  {
    category: "US",
    sizeNames: ["LETTER", "LEGAL", "FOLIO", "TABLOID", "EXECUTIVE"],
  },
  {
    category: "Other",
    sizeNames: [
      "2A0",
      "4A0",
      "ID1",
      "RA0",
      "RA1",
      "RA2",
      "RA3",
      "SRA0",
      "SRA1",
      "SRA2",
      "SRA3",
      "SRA4",
    ],
  },
];

function AddPageExpanded() {
  const [generalSelection, setGeneralSelection] = useState("");

  const [selectedPageSize, setSelectedPageSize] = useState("A0");
  const dispatch = useDispatch();

  const paperSizeCategory =
    paperSizes.find((e) => e.category === generalSelection) || {};

  return (
    <div className="flex flex-col items-center pl-1 pr-1">
      {generalSelection ? (
        <div className="flex flex-col gap-4 self-start">
          <div
            className="cursor-pointer pt-4 underline underline-offset-4 transition-all duration-300 hover:text-slate-400"
            onClick={() => setGeneralSelection("")}
          >
            Back
          </div>
          <div className="pt-2">{generalSelection} Sizes</div>

          <div className="flex gap-4">
            <select
              onChange={(e) => setSelectedPageSize(e.target.value)}
              className="w-24 rounded-sm bg-slate-500 outline-none"
            >
              {paperSizeCategory.sizeNames.map((pageSize, i) => (
                <option key={i}>{pageSize}</option>
              ))}
            </select>
            <button
              className="w-24 rounded-sm bg-slate-500 hover:bg-slate-400"
              onClick={() => dispatch(addPage(selectedPageSize))}
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 pt-4">
          {paperSizes.map((e, i) => (
            <GeneralPaperSelect
              key={i}
              text={e.category}
              onClick={setGeneralSelection}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AddPageExpanded;
