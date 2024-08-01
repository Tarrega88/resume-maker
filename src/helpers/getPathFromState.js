export function getPathFromState(
  render,
  destinationPath,
  currentPage,
  parent = false,
) {
  const parentOrDescendant = parent ? 1 : 0;
  let path = render[currentPage];

  for (let i = 1; i < destinationPath.length - parentOrDescendant; i++) {
    path = path.content[destinationPath[i]];
  }

  return path;
}
