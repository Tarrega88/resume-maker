const pageDimensions = {
  // A series
  A0: { width: 2384, height: 3370 },
  A1: { width: 1684, height: 2384 },
  A2: { width: 1191, height: 1684 },
  A3: { width: 842, height: 1191 },
  A4: { width: 595, height: 842 },
  A5: { width: 420, height: 595 },
  A6: { width: 298, height: 420 },
  A7: { width: 210, height: 298 },
  A8: { width: 147, height: 210 },
  A9: { width: 105, height: 147 },
  A10: { width: 74, height: 105 },

  // B series
  B0: { width: 2835, height: 4008 },
  B1: { width: 2004, height: 2835 },
  B2: { width: 1417, height: 2004 },
  B3: { width: 1001, height: 1417 },
  B4: { width: 709, height: 1001 },
  B5: { width: 499, height: 709 },
  B6: { width: 354, height: 499 },
  B7: { width: 249, height: 354 },
  B8: { width: 175, height: 249 },
  B9: { width: 125, height: 175 },
  B10: { width: 88, height: 125 },

  // C series (mainly used for envelopes)
  C0: { width: 2599, height: 3676 },
  C1: { width: 1837, height: 2599 },
  C2: { width: 1298, height: 1837 },
  C3: { width: 918, height: 1298 },
  C4: { width: 649, height: 918 },
  C5: { width: 459, height: 649 },
  C6: { width: 323, height: 459 },
  C7: { width: 230, height: 323 },
  C8: { width: 162, height: 230 },
  C9: { width: 113, height: 162 },
  C10: { width: 79, height: 113 },

  // US sizes
  LETTER: { width: 612, height: 792 },
  LEGAL: { width: 612, height: 1008 },
  TABLOID: { width: 792, height: 1224 },
  EXECUTIVE: { width: 522, height: 756 },

  // Other common sizes
  FOLIO: { width: 612, height: 936 },

  "2A0": { width: 3370, height: 4778 },
  "4A0": { width: 4778, height: 6741 },
  ID1: { width: 242, height: 153 },
  RA0: { width: 2438, height: 3458 },
  RA1: { width: 1729, height: 2438 },
  RA2: { width: 1219, height: 1729 },
  RA3: { width: 864, height: 1219 },
  RA4: { width: 610, height: 864 },
  SRA0: { width: 2551, height: 3628 },
  SRA1: { width: 1814, height: 2551 },
  SRA2: { width: 1276, height: 1814 },
  SRA3: { width: 907, height: 1276 },
  SRA4: { width: 638, height: 907 },
};

const pageDimensionsInInches = {
  // A series
  A0: { width: 33.11, height: 46.81 },
  A1: { width: 23.39, height: 33.11 },
  A2: { width: 16.54, height: 23.39 },
  A3: { width: 11.69, height: 16.54 },
  A4: { width: 8.27, height: 11.69 },
  A5: { width: 5.83, height: 8.27 },
  A6: { width: 4.13, height: 5.83 },
  A7: { width: 2.91, height: 4.13 },
  A8: { width: 2.05, height: 2.91 },
  A9: { width: 1.46, height: 2.05 },
  A10: { width: 1.03, height: 1.46 },

  // B series
  B0: { width: 39.38, height: 56.0 },
  B1: { width: 28.0, height: 39.38 },
  B2: { width: 19.69, height: 28.0 },
  B3: { width: 13.88, height: 19.69 },
  B4: { width: 9.84, height: 13.88 },
  B5: { width: 7.0, height: 9.84 },
  B6: { width: 5.0, height: 7.0 },
  B7: { width: 3.5, height: 5.0 },
  B8: { width: 2.45, height: 3.5 },
  B9: { width: 1.75, height: 2.45 },
  B10: { width: 1.22, height: 1.75 },

  // C series (mainly used for envelopes)
  C0: { width: 36.1, height: 51.06 },
  C1: { width: 25.51, height: 36.1 },
  C2: { width: 18.39, height: 25.51 },
  C3: { width: 12.76, height: 18.39 },
  C4: { width: 9.02, height: 12.76 },
  C5: { width: 6.38, height: 9.02 },
  C6: { width: 4.49, height: 6.38 },
  C7: { width: 3.23, height: 4.49 },
  C8: { width: 2.24, height: 3.23 },
  C9: { width: 1.57, height: 2.24 },
  C10: { width: 1.1, height: 1.57 },

  // US sizes
  LETTER: { width: 8.5, height: 11.0 },
  LEGAL: { width: 8.5, height: 14.0 },
  TABLOID: { width: 11.0, height: 17.0 },
  EXECUTIVE: { width: 7.25, height: 10.5 },

  // Other common sizes
  FOLIO: { width: 8.5, height: 13.0 },

  "2A0": { width: 46.81, height: 66.22 },
  "4A0": { width: 66.22, height: 93.62 },
  ID1: { width: 3.39, height: 2.4 },
  RA0: { width: 34.3, height: 48.55 },
  RA1: { width: 24.3, height: 34.3 },
  RA2: { width: 17.15, height: 24.3 },
  RA3: { width: 12.13, height: 17.15 },
  RA4: { width: 8.62, height: 12.13 },
  SRA0: { width: 35.55, height: 51.02 },
  SRA1: { width: 25.35, height: 35.55 },
  SRA2: { width: 17.75, height: 25.35 },
  SRA3: { width: 12.68, height: 17.75 },
  SRA4: { width: 8.98, height: 12.68 },
};

const pageDimensionsInCentimeters = {
  // A series
  A0: { width: 84.1, height: 119.0 },
  A1: { width: 59.4, height: 84.1 },
  A2: { width: 42.0, height: 59.4 },
  A3: { width: 29.7, height: 42.0 },
  A4: { width: 21.0, height: 29.7 },
  A5: { width: 14.8, height: 21.0 },
  A6: { width: 10.5, height: 14.8 },
  A7: { width: 7.4, height: 10.5 },
  A8: { width: 5.2, height: 7.4 },
  A9: { width: 3.7, height: 5.2 },
  A10: { width: 2.6, height: 3.7 },

  // B series
  B0: { width: 100.0, height: 141.4 },
  B1: { width: 70.7, height: 100.0 },
  B2: { width: 50.0, height: 70.7 },
  B3: { width: 35.3, height: 50.0 },
  B4: { width: 25.0, height: 35.3 },
  B5: { width: 17.6, height: 25.0 },
  B6: { width: 12.5, height: 17.6 },
  B7: { width: 8.8, height: 12.5 },
  B8: { width: 6.2, height: 8.8 },
  B9: { width: 4.4, height: 6.2 },
  B10: { width: 3.1, height: 4.4 },

  // C series (mainly used for envelopes)
  C0: { width: 91.7, height: 129.7 },
  C1: { width: 64.8, height: 91.7 },
  C2: { width: 45.8, height: 64.8 },
  C3: { width: 32.4, height: 45.8 },
  C4: { width: 22.9, height: 32.4 },
  C5: { width: 16.2, height: 22.9 },
  C6: { width: 11.4, height: 16.2 },
  C7: { width: 8.1, height: 11.4 },
  C8: { width: 5.7, height: 8.1 },
  C9: { width: 4.0, height: 5.7 },
  C10: { width: 2.8, height: 4.0 },

  // US sizes
  LETTER: { width: 21.6, height: 27.9 },
  LEGAL: { width: 21.6, height: 35.6 },
  TABLOID: { width: 27.9, height: 43.2 },
  EXECUTIVE: { width: 18.4, height: 26.7 },

  // Other common sizes
  Folio: { width: 21.6, height: 33.0 },

  // New sizes
  "2A0": { width: 118.9, height: 168.2 },
  "4A0": { width: 168.2, height: 237.8 },
  ID1: { width: 8.5, height: 5.4 },
  RA0: { width: 86.0, height: 122.0 },
  RA1: { width: 61.0, height: 86.0 },
  RA2: { width: 43.0, height: 61.0 },
  RA3: { width: 30.5, height: 43.0 },
  RA4: { width: 21.5, height: 30.5 },
  SRA0: { width: 90.0, height: 128.0 },
  SRA1: { width: 64.0, height: 90.0 },
  SRA2: { width: 45.0, height: 64.0 },
  SRA3: { width: 32.0, height: 45.0 },
  SRA4: { width: 22.5, height: 32.0 },
};

const pageDimensionsInMillimeters = {
  // A series
  A0: { width: 841, height: 1189 },
  A1: { width: 594, height: 841 },
  A2: { width: 420, height: 594 },
  A3: { width: 297, height: 420 },
  A4: { width: 210, height: 297 },
  A5: { width: 148, height: 210 },
  A6: { width: 105, height: 148 },
  A7: { width: 74, height: 105 },
  A8: { width: 52, height: 74 },
  A9: { width: 37, height: 52 },
  A10: { width: 26, height: 37 },

  // B series
  B0: { width: 1000, height: 1414 },
  B1: { width: 707, height: 1000 },
  B2: { width: 500, height: 707 },
  B3: { width: 353, height: 500 },
  B4: { width: 250, height: 353 },
  B5: { width: 176, height: 250 },
  B6: { width: 125, height: 176 },
  B7: { width: 88, height: 125 },
  B8: { width: 62, height: 88 },
  B9: { width: 44, height: 62 },
  B10: { width: 31, height: 44 },

  // C series (mainly used for envelopes)
  C0: { width: 917, height: 1297 },
  C1: { width: 648, height: 917 },
  C2: { width: 458, height: 648 },
  C3: { width: 324, height: 458 },
  C4: { width: 229, height: 324 },
  C5: { width: 162, height: 229 },
  C6: { width: 114, height: 162 },
  C7: { width: 81, height: 114 },
  C8: { width: 57, height: 81 },
  C9: { width: 40, height: 57 },
  C10: { width: 28, height: 40 },

  // US sizes
  LETTER: { width: 216, height: 279 },
  LEGAL: { width: 216, height: 356 },
  TABLOID: { width: 279, height: 432 },
  EXECUTIVE: { width: 184, height: 267 },

  // Other common sizes
  FOLIO: { width: 216, height: 330 },

  "2A0": { width: 1189, height: 1682 },
  "4A0": { width: 1682, height: 2378 },
  ID1: { width: 85.6, height: 53.98 },
  RA0: { width: 860, height: 1220 },
  RA1: { width: 610, height: 860 },
  RA2: { width: 430, height: 610 },
  RA3: { width: 305, height: 430 },
  RA4: { width: 215, height: 305 },
  SRA0: { width: 900, height: 1280 },
  SRA1: { width: 640, height: 900 },
  SRA2: { width: 450, height: 640 },
  SRA3: { width: 320, height: 450 },
  SRA4: { width: 225, height: 320 },
};

function getPageDimensions(unitType, pageSize) {
  switch (unitType) {
    case "pt":
      return pageDimensions[pageSize] || { width: 0, height: 0 };
    case "in":
      return pageDimensionsInInches[pageSize] || { width: 0, height: 0 };
    case "cm":
      return pageDimensionsInCentimeters[pageSize] || { width: 0, height: 0 };
    case "mm":
      return pageDimensionsInMillimeters[pageSize] || { width: 0, height: 0 };
    default:
      return { width: 0, height: 0 };
  }
}

const pageSizeNames = Object.keys(pageDimensions);

export { getPageDimensions, pageSizeNames };
