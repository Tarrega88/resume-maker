import { createSlice } from "@reduxjs/toolkit";
import sectionTypes from "../../helpers/sectionTypes";
import { getPathFromState } from "../../helpers/getPathFromState";
import { arrMover } from "../../helpers/arrMover";

const initialState = {
  render: [
    {
      type: "View",
      name: "",
      containerType: "Page",
      pageSize: "A4",
      styles: ["page"],
      hideContent: false,
      id: crypto.randomUUID(),
      content: [],
    },
  ],
  docName: "Master Document",
  docStyles: [],
  copiedSection: {},
  copiedPath: [],
  copiedId: 1,
  showAllContent: false,
  currentPage: 0,
  destinationPath: [0],
  xScroll: 0,
};

const sectionCreatorSlice = createSlice({
  name: "sectionCreator",
  initialState,
  reducers: {
    addSection(state, action) {
      const path = localCurrentSection(state);

      if (action.payload.type === "SVG") {
        path.content.push({
          ...sectionTypes[action.payload.type],
          svgName: action.payload.content.svgName,
          name: action.payload.name,
          id: crypto.randomUUID(),
        });
      } else if (action.payload.type === "Image") {
        path.content.push({
          ...sectionTypes[action.payload.type],
          name: action.payload.name,
          id: crypto.randomUUID(),
          imageId: action.payload.imageId,
        });
      } else {
        path.content.push({
          ...sectionTypes[action.payload.type],
          name: action.payload.name,
          id: crypto.randomUUID(),
        });
      }
    },
    removeSection(state) {
      const destination = state.destinationPath.at(-1);
      const path = localCurrentSection(state, true);
      path.content.splice(destination, 1);
    },

    copySection(state) {
      const path = localCurrentSection(state);
      state.copiedPath = state.destinationPath;
      state.copiedId = path.id;
      state.copiedSection = { ...path, id: crypto.randomUUID() };
    },
    pasteSection(state) {
      if (Object.keys(state.copiedSection).length === 0) return;
      const path = localCurrentSection(state);
      path.content.push(state.copiedSection);
    },

    hideContent(state) {
      const path = localCurrentSection(state);
      path.hideContent = !path.hideContent;
    },

    moveSectionLeft(state) {
      const path = localCurrentSection(state, true);

      const destination = state.destinationPath;

      const initialTarget = destination.at(-1) - 1;
      const targetLocation =
        initialTarget === -1 ? path.content.length - 1 : initialTarget;
      path.content = path.content
        .toSpliced(destination.at(-1), 1)
        .toSpliced(targetLocation, 0, path.content[destination.at(-1)]);
      state.destinationPath = [
        ...state.destinationPath.slice(0, -1),
        targetLocation,
      ];
    },
    moveSectionRight(state) {
      const path = localCurrentSection(state, true);
      const destination = state.destinationPath;

      const initialTarget = destination.at(-1) + 1;
      const targetLocation =
        initialTarget === path.content.length ? 0 : initialTarget;
      path.content = path.content
        .toSpliced(destination.at(-1), 1)
        .toSpliced(targetLocation, 0, path.content[destination.at(-1)]);
      state.destinationPath = [
        ...state.destinationPath.slice(0, -1),
        targetLocation,
      ];
    },

    setPath(state, action) {
      state.destinationPath = action.payload;
    },
    setXScroll(state, action) {
      state.xScroll = action.payload;
    },
    editText(state, action) {
      const path = localCurrentSection(state);
      path.content = action.payload;
    },
    editName(state, action) {
      const path = localCurrentSection(state);
      path.name = action.payload;
    },
    moveStyleDown(state, action) {
      const path = localCurrentSection(state);
      const initialTarget = action.payload + 1;
      const targetLocation =
        initialTarget === path.styles.length ? 0 : initialTarget;
      path.styles = path.styles
        .toSpliced(action.payload, 1)
        .toSpliced(targetLocation, 0, path.styles[action.payload]);
    },
    moveStyleUp(state, action) {
      const path = localCurrentSection(state);

      const initialTarget = action.payload - 1;
      const targetLocation =
        initialTarget < 0 ? path.styles.length - 1 : initialTarget;
      path.styles = path.styles
        .toSpliced(action.payload, 1)
        .toSpliced(targetLocation, 0, path.styles[action.payload]);
    },
    addStyle(state, action) {
      const path = localCurrentSection(state);

      if (!path.styles.includes(action.payload)) {
        path.styles.push(action.payload);
      }
    },
    addDocStyle(state, action) {
      if (!state.docStyles.includes(action.payload)) {
        state.docStyles.push(action.payload);
      }
    },
    removeDocStyle(state, action) {
      state.docStyles = state.docStyles.filter(
        (style) => style !== action.payload,
      );
    },
    removeStyle(state, action) {
      const path = localCurrentSection(state);
      //Idea 5/19/2024: filter is probably unnecessary and a technically higher performance option would be to find the one instance of the style and remove it through splicing or something.
      path.styles = path.styles.filter((style) => style !== action.payload);
    },

    addPage(state, action) {
      const newPage = {
        type: "View",
        name: "",
        containerType: "Page",
        pageSize: action.payload,
        styles: ["page"],
        hideContent: false,
        id: crypto.randomUUID(),
        content: [],
      };
      const currentPage = state.currentPage;

      const newRender = [...state.render];
      newRender.splice(currentPage + 1, 0, newPage);
      state.render = newRender;
      state.destinationPath = [0];
      state.currentPage = currentPage + 1;
    },
    removePage(state) {
      if (state.render.length === 1) return;
      const currentPage = state.currentPage;
      const newRender = [...state.render];
      newRender.splice(currentPage, 1);
      state.destinationPath = [0];
      state.render = newRender;
      if (state.currentPage === state.render.length) {
        state.currentPage--;
      }
    },
    movePage(state, action) {
      if (state.render.length === 1) return;
      const currentPage = state.currentPage;
      const tryPath = currentPage + action.payload;
      const to =
        tryPath < 0
          ? state.render.length - 1
          : tryPath >= state.render.length
            ? 0
            : tryPath;
      state.currentPage = to;
      state.destinationPath = [0];
      state.render = arrMover(state.render, currentPage, to);
    },
    turnPageTo(state, action) {
      state.currentPage = action.payload;
    },
    setDocName(state, action) {
      state.docName = action.payload;
    },
    setReversed(state, action) {
      const path = localCurrentSection(state);
      path.reversed = action.payload;
    },
  },
});

export const {
  addSection,
  removeSection,
  setPath,
  editText,
  editName,
  moveSectionLeft,
  moveSectionRight,
  copySection,
  pasteSection,
  hideContent,
  moveStyleDown,
  moveStyleUp,
  addStyle,
  removeStyle,
  addDocStyle,
  removeDocStyle,
  addPage,
  removePage,
  movePage,
  turnPageTo,
  setDocName,
  setReversed,
  setXScroll,
} = sectionCreatorSlice.actions;
export default sectionCreatorSlice.reducer;

function localCurrentSection(state, parent = false) {
  // return getPathFromState(state.render, state.destinationPath, parent);
  return getPathFromState(
    state.render,
    state.destinationPath,
    state.currentPage,
    parent,
  );
}

export function currentSection(state, parent = false) {
  return getPathFromState(
    state.sectionCreator.render,
    state.sectionCreator.destinationPath,
    state.sectionCreator.currentPage,
    parent,
  );
}

export function currentPageSize(state) {
  const currentPage = state.sectionCreator.currentPage;

  return state.sectionCreator.render[currentPage].pageSize;
}

export { initialState as sectionCreatorInitialState };

export function parentSection(state) {
  //TODO 6/5/2024 - looks like this isn't actually being used anywhere - may end up removing it
  // let path =
  //   state.sectionCreator.render[state.sectionCreator.destinationPath[0]];
  // const sliced = state.sectionCreator.destinationPath.slice(1);

  // for (let i = 0; i < sliced.length - 2; i++) {
  //   path = path.content[sliced[i]];
  // }

  const path = getPathFromState(
    state.sectionCreator.render,
    state.sectionCreator.destinationPath,
    state.sectionCreator.currentPage,
    true,
  );
  return path;
}
