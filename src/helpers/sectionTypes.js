const sectionTypes = {
  //TODO 6/5/2024: Page will likely no longer be a part of sectionTypes, since pages will be treated differently than sections
  Page: {
    type: "View",
    name: "",
    containerType: "Page",
    pageSize: "A4",
    styles: ["page"],
    hideContent: false,
    content: [],
  },
  Row: {
    type: "View",
    name: "",
    containerType: "Row",
    styles: ["row"],
    hideContent: false,
    content: [],
    reversed: false,
  },
  Column: {
    type: "View",
    name: "",
    containerType: "Column",
    styles: ["column"],
    hideContent: false,
    content: [],
    reversed: false,
  },
  Text: {
    type: "Text",
    name: "",
    containerType: "Text",
    styles: ["text"],
    content: "",
  },
  Image: {
    type: "Image",
    name: "",
    containerType: "Image",
    styles: [],
    content: "",
  },
  SVG: {
    type: "SVG",
    name: "",
    containerType: "SVG",
    styles: [],
    content: [],
  },
};

export default sectionTypes;
