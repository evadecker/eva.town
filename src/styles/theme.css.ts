import {
  blackA,
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  plum,
  plumA,
  plumDark,
  plumDarkA,
  whiteA,
} from "@radix-ui/colors";
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

export const theme = createGlobalThemeContract(
  {
    // https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale
    appBg: {
      default: "", // Step 1 in Radix-UI
      subtle: "", // Step 2
    },
    elementBg: {
      default: "", // Step 3
      hover: "", // Step 4
      active: "", // Step 5
    },
    border: {
      subtle: "", // Step 6
      default: "", // Step 7
      hover: "", // Step 8
      outline: "",
    },
    solidBg: {
      default: "", // Step 9
      hover: "", // Step 10
    },
    text: {
      subtle: "", // Step 11
      default: "", // Step 12
      selection: "",
      iconA: "",
      inlineIcon: "",
      link: "",
      linkBg: "",
      linkUnderline: "",
    },
    fontWeight: {
      light: "",
      prose: "",
      code: "",
      normal: "",
      medium: "",
      bold: "",
    },
    color: {
      ...mauve,
      ...plum,
      ...blackA,
      ...whiteA,
    },
    synth: {
      base: "",
      endcap: "",
      lcdOutline: "",
      keysOutline: "",
      whitekey: "",
      whitekeyPressed: "",
      blackkey: "",
      blackkeyPressed: "",
      betweenKeys: "",
      keyLetter: "",
      lcd: {
        bg: "",
        light: "",
        medium: "",
        dark: "",
      },
    },
  },
  (_value, path) => `${path.join("-")}`
);

createGlobalTheme('[data-theme="light"]', theme, {
  appBg: {
    default: mauve.mauve1,
    subtle: mauve.mauve2,
  },
  elementBg: {
    default: mauve.mauve3,
    hover: mauve.mauve4,
    active: mauve.mauve5,
  },
  border: {
    subtle: mauve.mauve6,
    default: mauve.mauve7,
    hover: mauve.mauve8,
    outline: plumA.plumA9,
  },
  solidBg: {
    default: plum.plum9,
    hover: plum.plum10,
  },
  text: {
    subtle: mauve.mauve11,
    default: mauve.mauve12,
    selection: plum.plum8,
    iconA: mauveA.mauveA9,
    inlineIcon: plum.plum12,
    link: plum.plum11,
    linkBg: plum.plum3,
    linkUnderline: mauve.mauve7,
  },
  fontWeight: {
    light: "300",
    prose: "360",
    code: "420",
    normal: "420",
    medium: "480",
    bold: "700",
  },
  color: {
    ...plum,
    ...mauve,
    ...blackA,
    ...whiteA,
  },
  synth: {
    base: plumDark.plum4,
    endcap: plumDark.plum2,
    lcdOutline: plumDark.plum2,
    keysOutline: plumDark.plum2,
    whitekey: whiteA.whiteA12,
    whitekeyPressed: plum.plum11,
    blackkey: mauveDark.mauve5,
    blackkeyPressed: plumDark.plum5,
    betweenKeys: mauveDark.mauve11,
    keyLetter: blackA.blackA12,
    lcd: {
      bg: plum.plum4,
      light: plum.plum1,
      medium: plum.plum8,
      dark: plum.plum9,
    },
  },
});

createGlobalTheme('[data-theme="dark"]', theme, {
  appBg: {
    default: mauveDark.mauve1,
    subtle: mauveDark.mauve2,
  },
  elementBg: {
    default: mauveDark.mauve3,
    hover: mauveDark.mauve4,
    active: mauveDark.mauve5,
  },
  border: {
    subtle: mauveDark.mauve6,
    default: mauveDark.mauve7,
    hover: mauveDark.mauve8,
    outline: plumDarkA.plumA9,
  },
  solidBg: {
    default: plumDark.plum9,
    hover: plumDark.plum10,
  },
  text: {
    subtle: mauveDark.mauve11,
    default: mauveDark.mauve12,
    selection: plumDark.plum8,
    iconA: mauveDarkA.mauveA9,
    inlineIcon: plumDark.plum12,
    link: plumDark.plum11,
    linkBg: plumDark.plum3,
    linkUnderline: mauveDark.mauve7,
  },
  // Weights on dark background slightly lower to reduce bleed
  fontWeight: {
    light: "280",
    prose: "340",
    code: "400",
    normal: "400",
    medium: "460",
    bold: "680",
  },
  color: {
    ...plumDark,
    ...mauveDark,
    ...blackA,
    ...whiteA,
  },
  synth: {
    base: plum.plum10,
    endcap: plum.plum12,
    lcdOutline: plum.plum12,
    keysOutline: plum.plum12,
    whitekey: whiteA.whiteA12,
    whitekeyPressed: plum.plum9,
    blackkey: mauve.mauve12,
    blackkeyPressed: plum.plum9,
    betweenKeys: mauve.mauve8,
    keyLetter: blackA.blackA12,
    lcd: {
      bg: plum.plum4,
      light: plum.plum1,
      medium: plum.plum8,
      dark: plum.plum9,
    },
  },
});
