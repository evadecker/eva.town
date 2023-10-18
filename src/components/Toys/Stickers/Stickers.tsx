import { useStore } from "@nanostores/react";
import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { numSams } from "../../../stores/sam";
import { Sticker, type StickerProps } from "./Sticker";

export const Stickers = () => {
  const [stickers, setStickers] = useState<StickerProps[]>([]);
  const $numSams = useStore(numSams);

  const addSticker = () => {
    const getNewSticker = () => {
      return {
        id: nanoid(),
        variant: $numSams,
      };
    };
    setStickers((prev) => [...prev, getNewSticker()]);
  };

  useEffect(() => {
    if ($numSams > stickers.length) {
      addSticker();
    }

    if ($numSams === 0) {
      setStickers([]);
    }
  }, [$numSams]);

  return (
    <AnimatePresence>
      {stickers.map(({ id, variant }) => (
        <Sticker key={id} id={id} variant={variant} />
      ))}
    </AnimatePresence>
  );
};
