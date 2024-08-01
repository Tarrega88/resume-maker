// export default function toCamelCase(str) {
//   return str.replace(/-([a-z])/g, function (g) {
//     return g[1].toUpperCase();
//   });
// }

export default function toCamelCase(str) {
  return str.replace(/[:-]([a-z])/g, (_, p1) => p1.toUpperCase());
}
