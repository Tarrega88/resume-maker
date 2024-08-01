import { Page, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { useDispatch, useSelector } from "react-redux";

import RecursiveComponent from "./RecursiveComponent";
import StyleEditor from "../editor/Intro/StyleEditor";
import SvgEditor from "../svg/SvgEditor";
import TreeMapContainer from "./TreeMapContainer";

import "../../data/fonts/Roboto/robotoFont";
import "../../data/fonts/RobotoMono/robotoMonoFont";
import "../../data/fonts/Merriweather/merriweatherFont";
//This is for Montserrat - I might keep it loaded locally as a fallback:
import "../../helpers/fontRegisters";
import { useEffect, useRef, useState } from "react";
import MainNavRow from "../../ui/MainNav/MainNavRow";
import AboutSection from "../../ui/MainNav/AboutSection";
import { setXScroll } from "./sectionCreatorSlice";

const ratioSizes = {
  0: {
    tree: "basis-[60%]",
    doc: "basis-[40%]",
  },
  1: {
    tree: "basis-[70%]",
    doc: "basis-[30%]",
  },
  2: {
    tree: "basis-[80%]",
    doc: "basis-[20%]",
  },
  3: {
    tree: "basis-[90%]",
    doc: "basis-[10%]",
  },
  4: {
    tree: "basis-full",
    doc: "basis-0",
  },
};

function DocumentCreator() {
  const render = useSelector((state) => state.sectionCreator.render);
  const editorView = useSelector((state) => state.editor.editorView);
  const customStyles = useSelector((state) => state.editor.customStyles);

  const currentPage = useSelector((state) => state.sectionCreator.currentPage);

  const docStyles = useSelector((state) => state.sectionCreator.docStyles);
  const xScroll = useSelector((state) => state.sectionCreator.xScroll);

  const [pageRatio, setPageRatio] = useState(1);

  const unpackedDocStyles = Object.fromEntries(
    Object.entries(
      docStyles.reduce((acc, styleName) => {
        const style = customStyles.find((e) => e.name === styleName);
        return { ...acc, ...style };
      }, {}),
    ).sort((a, b) => a[0].localeCompare(b[0])),
  );

  const imgs = useSelector((state) => state.image.images);
  const currentImgIndex = useSelector((state) => state.image.currentImgIndex);
  const svgs = useSelector((state) => state.svgEditor.svgs);

  const [viewSingle, setViewSingle] = useState(false);

  const dataToRender = viewSingle ? render[currentPage] : render;

  const pageStyle = StyleSheet.create({
    page: {
      // fontFamily: "Montserrat",
    },
    viewer: {
      width: "100%",
      height: "100vh",
    },
  });

  const containerRef = useRef(null);
  const dispatch = useDispatch();

  function handleUpdateScroll() {
    if (containerRef.current) {
      dispatch(setXScroll(containerRef.current.scrollLeft));
    }
  }

  useEffect(
    function () {
      if (containerRef.current) {
        containerRef.current.scrollLeft = xScroll;
      }
    },
    [xScroll, editorView],
  );

  /*
TODO 6/6/2024
Goals:
1. Finish the rest of the CSS features
	-transformations
	-images
  6/11/2024 - finished layout (in position) but transformations will require new components and I'm going to approach it later, probably after release
2. add splash screen, reachable by, logo that shows my name and email
3. allow page size change by clicking top left of tree button
  */

  return (
    <div className="flex h-max bg-gray-500">
      <div
        className={`relative flex ${ratioSizes[pageRatio].tree} flex-col overflow-scroll border border-slate-200 bg-gray-500 transition-all duration-300`}
        ref={containerRef}
      >
        <MainNavRow
          viewSingle={viewSingle}
          setViewSingle={setViewSingle}
          totalPages={render.length}
          currentPage={currentPage}
          pageRatio={pageRatio}
          setPageRatio={setPageRatio}
        />
        <AboutSection />
        {editorView === "tree" && (
          <TreeMapContainer
            data={[render[currentPage]]}
            currentPage={currentPage}
            handleUpdateScroll={handleUpdateScroll}
          />
        )}
        {editorView === "style" && <StyleEditor />}
        {editorView === "svg" && <SvgEditor />}
      </div>
      <div className={`${ratioSizes[pageRatio].doc}`}>
        <PDFViewer style={pageStyle.viewer}>
          <Document>
            {viewSingle ? (
              <Page size={dataToRender.pageSize} style={pageStyle.page}>
                <RecursiveComponent
                  data={[render[currentPage]]}
                  unpackedDocStyles={unpackedDocStyles}
                  customStyles={customStyles}
                  path={[]}
                  svgs={svgs}
                  imgs={imgs}
                  currentImgIndex={currentImgIndex}
                />
              </Page>
            ) : (
              render.map((page, i) => (
                <Page size={page.pageSize} style={pageStyle.page} key={i}>
                  <RecursiveComponent
                    data={[page]}
                    customStyles={customStyles}
                    unpackedDocStyles={unpackedDocStyles}
                    path={[]}
                    svgs={svgs}
                    imgs={imgs}
                    currentImgIndex={currentImgIndex}
                  />
                </Page>
              ))
            )}
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
}

export default DocumentCreator;
