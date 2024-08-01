// const pageSize = useSelector((state) => state.document.pageSize);
// const maxDimensionData = getMaxDimensions(pageSize);

export default function getHAndWButtonData(maxDimensionData) {
  return {
    widthMeasurements: {
      pt: {
        limit: maxDimensionData.pt.width,
        minLimit: 0,
        buttons: [1, 20],
      },
      "%": {
        limit: 1000,
        minLimit: 0,
        buttons: [1, 5],
      },
      vh: {
        limit: 100,
        minLimit: 0,
        buttons: [1, 5],
      },
      vw: {
        limit: 100,
        minLimit: 0,
        buttons: [1, 5],
      },
      in: {
        limit: maxDimensionData.in.width,
        minLimit: 0,
        buttons: [0.1, 0.25],
      },
      cm: {
        limit: maxDimensionData.cm.width,
        minLimit: 0,
        buttons: [0.25, 1],
      },
      mm: {
        limit: maxDimensionData.mm.width,
        minLimit: 0,
        buttons: [1, 5],
      },
      // {
      //   name: "auto",
      //   limit: null,
      //   buttons: [],
      // },
    },
    heightMeasurements: {
      pt: {
        limit: maxDimensionData.pt.height,
        minLimit: 0,
        buttons: [1, 20],
      },
      "%": {
        limit: 1000,
        minLimit: 0,
        buttons: [1, 5],
      },
      vh: {
        limit: 100,
        minLimit: 0,
        buttons: [1, 5],
      },
      vw: {
        limit: 100,
        minLimit: 0,
        buttons: [1, 5],
      },
      in: {
        limit: maxDimensionData.in.height,
        minLimit: 0,
        buttons: [0.1, 0.25],
      },
      cm: {
        limit: maxDimensionData.cm.height,
        minLimit: 0,
        buttons: [0.25, 1],
      },
      mm: {
        limit: maxDimensionData.mm.height,
        minLimit: 0,
        buttons: [1, 5],
      },
      // {
      //   name: "auto",
      //   limit: null,
      //   buttons: [],
      // },
    },
  };
}
