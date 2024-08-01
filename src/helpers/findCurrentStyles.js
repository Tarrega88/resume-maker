import { findUnitType, findUnitValue } from "./separateValueAndType";

//const horizontalTypes = {
//  marginLeft: "Left",
//  marginRight: "Right",
//};

// function findActiveTypes(data, currentStyle) {
//   return Object.keys(data).reduce((a, b) => {
//     a[b] = currentStyle?.[b] || false;
//     return a;
//   }, {});
// }

function findActiveTypes(data, currentStyle) {
  return data.reduce((a, b) => {
    a[b.name] = currentStyle?.[b.name] || false;
    return a;
  }, {});
}

function findTypeAndValue(data, activeTypes) {
  return data.reduce((a, b) => {
    a[b.name] = {
      unitType: findUnitType(activeTypes[b.name]),
      unitValue: findUnitValue(activeTypes[b.name]),
    };
    return a;
  }, {});
}

// function findTypeAndValue(data, activeTypes) {
//   return Object.keys(data).reduce((a, b) => {
//     a[b] = {
//       unitType: findUnitType(activeTypes[b]),
//       unitValue: findUnitValue(activeTypes[b]),
//     };
//     return a;
//   }, {});
// }

export { findActiveTypes, findTypeAndValue };
