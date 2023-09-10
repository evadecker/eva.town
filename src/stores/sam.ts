import { action, atom } from "nanostores";

export const numSams = atom(0);
export const topZIndex = atom(1);

export const addSam = action(numSams, "addSam", (store) => {
  topZIndex.set(topZIndex.get() + 1);
  store.set(store.get() + 1);
});

export const incrementTopZIndex = action(topZIndex, "dragSam", (store) => {
  store.set(store.get() + 1);
});

export const clearSams = action(numSams, "clearSams", (store) => {
  topZIndex.set(1);
  store.set(0);
});
