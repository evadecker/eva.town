import { atom, action } from "nanostores";

export const numSams = atom(0);
export const topZIndex = atom(1);

export const addSam = action(numSams, "addSam", (store) => {
  topZIndex.set(topZIndex.get() + 1);
  return store.set(store.get() + 1);
});

export const incrementTopZIndex = action(topZIndex, "dragSam", (store) => {
  return store.set(store.get() + 1);
});

export const clearSams = action(numSams, "clearSams", (store) => {
  topZIndex.set(1);
  return store.set(0);
});
