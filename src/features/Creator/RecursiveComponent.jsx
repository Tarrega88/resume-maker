import { Image, Text, View } from "@react-pdf/renderer";
import SvgDocumentRender from "../svg/SvgDocumentRender";

export default function RecursiveComponent({
  data,
  customStyles,
  path = [],
  svgs,
  imgs,
  currentImgIndex,
  unpackedDocStyles,
}) {
  return data.map((item, index) => {
    const initialStyleObject =
      item.containerType === "Page" ? unpackedDocStyles : {};

    const unpackedStyles = Object.fromEntries(
      Object.entries(
        item.styles.reduce((acc, styleName) => {
          const style = customStyles.find((e) => e.name === styleName);
          return { ...acc, ...style };
        }, initialStyleObject),
      ).sort((a, b) => a[0].localeCompare(b[0])),
    );
    const currentPath = path.concat(index);

    if (item.type === "View") {
      return (
        <View key={Math.random()} style={unpackedStyles}>
          <RecursiveComponent
            data={item.content}
            customStyles={customStyles}
            path={currentPath}
            svgs={svgs}
            imgs={imgs}
            currentImgIndex={currentImgIndex}
          />
        </View>
      );
    } else {
      switch (item.type) {
        case "Text":
          return <Text style={unpackedStyles}>{item.content}</Text>;
        case "Image":
          return (
            <Image
              src={`${imgs.find((e) => e?.imageId === item?.imageId)?.base64}`}
              style={unpackedStyles}
            ></Image>
          );
        case "SVG":
          return (
            <SvgDocumentRender
              svg={svgs.find((e) => e.svgName === item.svgName).svg}
            />
          );
        default:
          return null;
      }
    }
  });
}
