import { getPageDimensions } from "../features/editor/Size/maxSizes";

export default function getMaxDimensions(pageSize) {
  const dimensions = {
    pt: getPageDimensions("pt", pageSize),
    in: getPageDimensions("in", pageSize),
    cm: getPageDimensions("cm", pageSize),
    mm: getPageDimensions("mm", pageSize),
  };

  return {
    pt: {
      width: dimensions.pt.width,
      height: dimensions.pt.height,
    },
    in: {
      width: dimensions.in.width,
      height: dimensions.in.height,
    },
    cm: {
      width: dimensions.cm.width,
      height: dimensions.cm.height,
    },
    mm: {
      width: dimensions.mm.width,
      height: dimensions.mm.height,
    },
  };
}
