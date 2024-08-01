export default function findButtonData(types, data, unitTypes) {
  return Object.entries(types).reduce((a, [key, value]) => {
    const measurementData = {
      name: key,
      displayName: value,
      unitType: data[key].unitType,
      unitValue: data[key].unitValue,
      unitTypes: unitTypes,
    };
    a.push(measurementData);
    return a;
  }, []);
}
