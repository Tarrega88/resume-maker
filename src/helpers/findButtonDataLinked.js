export default function findButtonDataLinked(types, data, unitTypes) {
  return types.map((e) => {
    return {
      name: e.name,
      displayName: e.displayName,
      linkedName: e.linkedName,
      unitType: data[e.name].unitType,
      unitValue: data[e.name].unitValue,
      unitTypes: unitTypes,
    };
  });
}
