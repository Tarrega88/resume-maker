import {
  Svg,
  Line,
  Polyline,
  Polygon,
  Path,
  Rect,
  Circle,
  Ellipse,
  Text,
  Tspan,
  G,
  Stop,
  Defs,
  ClipPath,
  LinearGradient,
  RadialGradient,
} from "@react-pdf/renderer";

const svgElementConverter = {
  svg: Svg,
  line: Line,
  polyline: Polyline,
  polygon: Polygon,
  path: Path,
  rect: Rect,
  circle: Circle,
  ellipse: Ellipse,
  text: Text,
  tspan: Tspan,
  g: G,
  stop: Stop,
  defs: Defs,
  clipPath: ClipPath,
  linearGradient: LinearGradient,
  radialGradient: RadialGradient,
};

export { svgElementConverter };
