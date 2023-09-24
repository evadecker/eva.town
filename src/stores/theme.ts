import { action, atom } from "nanostores";

export type Theme = "dark" | "light";

export const $theme = atom<Theme>("light");

export const setTheme = action($theme, "toggleTheme", (store, theme: Theme) => {
  store.set(theme);
});
