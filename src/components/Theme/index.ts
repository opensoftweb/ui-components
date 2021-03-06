import { borders, borderWidths } from "./borders";
import { breakpoints } from "./breakpoints";
import { radii } from "./radii";
import { colors } from "./colors";
import { shadows } from "./shadows";
import { sizes } from "./sizes";
import { space } from "./space";
import { typography } from "./typography";
import { zIndices } from "./zIndices";

export const theme = {
  name: "default",
  borders,
  borderWidths,
  breakpoints,
  colors,
  radii,
  shadows,
  sizes,
  space,
  ...typography,
  zIndices,
};

export { borders, borderWidths, breakpoints, radii, colors, shadows, sizes, space, typography, zIndices };
