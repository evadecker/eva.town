import { useStore } from "@nanostores/react";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { clearSams, numSams } from "../../stores/sam";
import { Sticker, type StickerProps } from "./Sticker";

export const Stickers = () => {
  const [stickers, setStickers] = useState<StickerProps[]>([]);
  const [showShoo, setShowShoo] = useState(false);
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

  useEffect(() => {
    if ($numSams > 2) {
      setShowShoo(true);
    } else {
      setShowShoo(false);
    }
  }, [$numSams]);

  return (
    <div className="stickers">
      <AnimatePresence>
        {stickers.map(({ id, variant }) => (
          <Sticker key={id} id={id} variant={variant} />
        ))}
        {showShoo && (
          <motion.button
            data-sam-shoo
            type="button"
            onClick={clearSams}
            initial={{ bottom: -50, left: "50%", x: "-50%" }}
            animate={{
              left: "50%",
              x: "-50%",
              bottom: 16,
            }}
            exit={{
              bottom: -50,
              left: "50%",
              x: "-50%",
            }}
          >
            Tell Sam to shoo?
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
