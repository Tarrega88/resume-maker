export default function filterObjectKey(data, filterOut) {
  return Object.fromEntries(
    Object.entries(data).filter((e) => !filterOut.includes(e[0])),
  );
}
