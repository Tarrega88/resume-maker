const findStyle = (data, name) => data.find((e) => e.name === name);

function CurrentStyleExpanded({ hoveredStyle, styleData }) {
  const style = findStyle(styleData, hoveredStyle);

  return (
    <div className="sticky top-2 h-max overflow-x-hidden">
      <div>Style: {hoveredStyle}</div>
      {hoveredStyle
        ? Object.entries(style)?.map(
            ([key, val], j) =>
              key !== "name" && (
                <div key={j} className="flex gap-x-2">
                  <div>{`${key}:`}</div>
                  <div>{val}</div>
                </div>
              ),
          )
        : null}
    </div>
  );
}

export default CurrentStyleExpanded;
