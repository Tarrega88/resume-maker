import { Font } from "@react-pdf/renderer";

import MontserratBlack from "../data/fonts/Montserrat/static/Montserrat-Black.ttf";
import MontserratBlackItalic from "../data/fonts/Montserrat/static/Montserrat-BlackItalic.ttf";
import MonserratBold from "../data/fonts/Montserrat/static/Montserrat-Bold.ttf";
import MontserratBoldItalic from "../data/fonts/Montserrat/static/Montserrat-BoldItalic.ttf";
import MonterratExtraBold from "../data/fonts/Montserrat/static/Montserrat-ExtraBold.ttf";
import MontserratExtraBoldItalic from "../data/fonts/Montserrat/static/Montserrat-ExtraBoldItalic.ttf";
import MontserratExtraLight from "../data/fonts/Montserrat/static/Montserrat-ExtraLight.ttf";
import MontserratExtraLightItalic from "../data/fonts/Montserrat/static/Montserrat-ExtraLightItalic.ttf";
import MontserratItalic from "../data/fonts/Montserrat/static/Montserrat-Italic.ttf";
import MontserratLight from "../data/fonts/Montserrat/static/Montserrat-Light.ttf";
import MontserratLightItalic from "../data/fonts/Montserrat/static/Montserrat-LightItalic.ttf";
import MontserratMedium from "../data/fonts/Montserrat/static/Montserrat-Medium.ttf";
import MontserratMediumItalic from "../data/fonts/Montserrat/static/Montserrat-MediumItalic.ttf";
import MontserratRegular from "../data/fonts/Montserrat/static/Montserrat-Regular.ttf";
import MontserratSemiBold from "../data/fonts/Montserrat/static/Montserrat-SemiBold.ttf";
import MontserratSemiBoldItalic from "../data/fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf";
import MontserratThin from "../data/fonts/Montserrat/static/Montserrat-Thin.ttf";
import MontserratThinItalic from "../data/fonts/Montserrat/static/Montserrat-ThinItalic.ttf";

Font.register({
  family: "Montserrat",
  fontStyle: "normal",
  fontWeight: "normal",
  fonts: [
    { src: MontserratBlack, fontWeight: 900 },
    {
      src: MontserratBlackItalic,
      fontWeight: 900,
      fontStyle: "italic",
    },
    { src: MonserratBold, fontWeight: 700 },
    {
      src: MontserratBoldItalic,
      fontWeight: 700,
      fontStyle: "italic",
    },
    { src: MonterratExtraBold, fontWeight: 800 },
    {
      src: MontserratExtraBoldItalic,
      fontWeight: 800,
      fontStyle: "italic",
    },
    { src: MontserratExtraLight, fontWeight: 200 },
    {
      src: MontserratExtraLightItalic,
      fontWeight: 200,
      fontStyle: "italic",
    },
    { src: MontserratItalic, fontStyle: "italic", fontWeight: 400 },
    {
      src: MontserratLight,
      fontWeight: 300,
    },
    {
      src: MontserratLightItalic,
      fontWeight: 300,
      fontStyle: "italic",
    },
    { src: MontserratMedium, fontWeight: 500 },
    {
      src: MontserratMediumItalic,
      fontWeight: 500,
      fontStyle: "italic",
    },
    { src: MontserratRegular, fontWeight: 400 },
    { src: MontserratSemiBold, fontWeight: 600 },
    {
      src: MontserratSemiBoldItalic,
      fontWeight: 600,
      fontStyle: "italic",
    },
    { src: MontserratThin, fontWeight: 100 },
    {
      src: MontserratThinItalic,
      fontWeight: 100,
      fontStyle: "italic",
    },
  ],
});
