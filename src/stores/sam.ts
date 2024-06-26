import { atom } from "nanostores";

export const numSams = atom(0);
export const topZIndex = atom(1);

export const addSam = () => {
  topZIndex.set(topZIndex.get() + 1);
  numSams.set(numSams.get() + 1);
};

export const incrementTopZIndex = () => {
  topZIndex.set(topZIndex.get() + 1);
};

export const clearSams = () => {
  topZIndex.set(1);
  numSams.set(0);
};
