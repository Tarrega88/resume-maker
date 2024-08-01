const unitTypes = ["pt", "%", "in", "cm", "mm"];

function PreferredMeasurementType() {
  return unitTypes.map((type, i) => (
    <option key={i} value={type} className="text-center">
      {type}
    </option>
  ));
}

export default PreferredMeasurementType;
