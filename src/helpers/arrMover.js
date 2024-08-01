export const arrMover = (arr, fromIndex, toIndex) => {
  const item = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, item);
  return arr;
};
