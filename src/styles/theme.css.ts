import {
  blackA,
  mauve,
  mauveDark,
  plum,
  plumDark,
  whiteA,
} from "@radix-ui/colors";
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

export const theme = createGlobalThemeContract(
  {
    background: {
      default: "",
      alt: "",
    },
    text: {
      default: "",
      subtle: "",
      selection: "",
      inlineIcon: "",
      link: "",
      linkBg: "",
      linkUnderline: "",
      codeBg: "",
    },
    border: {
      default: "",
      subtle: "",
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
      ...Object.fromEntries(
        Object.entries(plum).map(([key, _value]) => [key, ""])
      ),
      ...Object.fromEntries(
        Object.entries(blackA).map(([key, _value]) => [key, ""])
      ),
      ...Object.fromEntries(
        Object.entries(whiteA).map(([key, _value]) => [key, ""])
      ),
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
  background: {
    default: mauve.mauve1,
    alt: mauve.mauve2,
  },
  text: {
    default: mauve.mauve12,
    subtle: mauve.mauve11,
    selection: plum.plum8,
    inlineIcon: plum.plum12,
    link: plum.plum11,
    linkBg: plum.plum3,
    linkUnderline: mauve.mauve7,
    codeBg: mauve.mauve3,
  },
  border: {
    default: mauve.mauve7,
    subtle: mauve.mauve6,
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
  background: {
    default: mauveDark.mauve1,
    alt: mauveDark.mauve2,
  },
  text: {
    default: mauveDark.mauve12,
    subtle: mauveDark.mauve11,
    selection: plumDark.plum8,
    inlineIcon: plumDark.plum12,
    link: plumDark.plum11,
    linkBg: plumDark.plum3,
    linkUnderline: mauveDark.mauve7,
    codeBg: mauveDark.mauve3,
  },
  border: {
    default: mauveDark.mauve7,
    subtle: mauveDark.mauve6,
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
