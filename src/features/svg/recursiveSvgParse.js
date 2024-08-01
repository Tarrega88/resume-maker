import toCamelCase from "../../helpers/toCamelCase";

function updateGradientId(attributes) {
  if (attributes.id) {
    const newId = `gradient-${crypto.randomUUID()}`;
    const oldId = attributes.id;
    attributes.id = newId;
    return { oldId, newId };
  }
  return null;
}

export default function recursiveSvgParse(
  element,
  path = [],
  gradientIdMap = {},
) {
  const children = element.children;
  const preppedObj = {
    tagName: element.tagName,
    attributes: {},
    children: [],
    textContent: element.tagName === "text" ? element.textContent : null,
    path: path,
  };

  Array.from(element.attributes).forEach((attr) => {
    let camelName = toCamelCase(attr.name);

    if (camelName === "class") {
      camelName = "className";
    }

    if (attr.name === "style") {
      preppedObj.attributes[camelName] = {};
      const valueArr = attr.value
        .split(";")
        .map((e) => e.split(":"))
        .filter((e) => e.length === 2);
      for (let i = 0; i < valueArr.length; i++) {
        for (let j = 0; j < 2; j++) {
          const key = toCamelCase(valueArr[i][0]);
          preppedObj.attributes[camelName][key] = valueArr[i][1].replaceAll(
            ";",
            "",
          );
        }
      }
    } else {
      preppedObj.attributes[camelName] = attr.value;
    }
  });

  if (
    element.tagName === "linearGradient" ||
    element.tagName === "radialGradient"
  ) {
    const idUpdate = updateGradientId(preppedObj.attributes);
    if (idUpdate) {
      gradientIdMap[idUpdate.oldId] = idUpdate.newId;
    }
  }

  Array.from(children).forEach((child, index) => {
    preppedObj.children.push(
      recursiveSvgParse(child, path.concat(index), gradientIdMap),
    );
  });

  if (
    preppedObj.attributes.fill &&
    preppedObj.attributes.fill.startsWith("url(#")
  ) {
    const oldId = preppedObj.attributes.fill.slice(5, -1);
    if (gradientIdMap[oldId]) {
      preppedObj.attributes.fill = `url(#${gradientIdMap[oldId]})`;
    }
  }

  if (
    preppedObj.attributes.stroke &&
    preppedObj.attributes.stroke.startsWith("url(#")
  ) {
    const oldId = preppedObj.attributes.stroke.slice(5, -1);
    if (gradientIdMap[oldId]) {
      preppedObj.attributes.stroke = `url(#${gradientIdMap[oldId]})`;
    }
  }

  return preppedObj;
}
