import { blackA, plum, plumDark, whiteA } from "@radix-ui/colors";
import {
  createTheme,
  createThemeContract,
  globalFontFace,
} from "@vanilla-extract/css";

const firaCode = "fira-code";

globalFontFace(firaCode, {
  src: 'url("/fonts/FiraCode-VF.woff2") format("woff2")',
  fontStyle: "normal",
});

const commonVars = {
  fontFamily: {
    sans: 'roc-grotesk-variable, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    serif:
      'loretta-variable, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: `${firaCode}, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },

  // Perfect Fourth Scale
  // https://typescale.com
  fontSize: {
    h1: "4.209rem",
    h2: "3.157rem",
    h3: "2.369rem",
    h4: "1.777rem",
    h5: "1.333rem",
    body: {
      mobile: "16px",
      tablet: "17px",
      desktop: "18px",
    },
    small: "0.75rem",
  },

  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  space: {
    xxs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
  },

  radius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    full: "9999px",
  },
};

export const theme = createThemeContract({
  background: {
    default: "",
    alt: "",
  },
  text: {
    default: "",
    subtle: "",
  },
  border: {
    default: "",
    subtle: "",
  },
  color: {
    ...plum,
    ...blackA,
    ...whiteA,
  },
  ...commonVars,
});

export const lightThemeClass = createTheme(theme, {
  background: {
    default: plum.plum1,
    alt: plum.plum2,
  },
  text: {
    default: plum.plum12,
    subtle: plum.plum11,
  },
  border: {
    default: plum.plum3,
    subtle: plum.plum4,
  },
  color: {
    ...plum,
    ...blackA,
    ...whiteA,
  },
  ...commonVars,
});

export const darkThemeClass = createTheme(theme, {
  background: {
    default: plumDark.plum1,
    alt: plumDark.plum2,
  },
  text: {
    default: plumDark.plum12,
    subtle: plumDark.plum11,
  },
  border: {
    default: plumDark.plum3,
    subtle: plumDark.plum4,
  },
  color: {
    ...plumDark,
    ...blackA,
    ...whiteA,
  },
  ...commonVars,
});
