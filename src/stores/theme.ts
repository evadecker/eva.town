import { action, atom } from "nanostores";

export type Theme = "light" | "dark" | "default";

export const $preferredTheme = atom<Theme>("default");

export const setPreferredTheme = action(
  $preferredTheme,
  "setPreferredTheme",
  (store, theme: Theme) => {
    store.set(theme);
  }
);
