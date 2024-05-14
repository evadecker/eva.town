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
    if ($numSams > stickers.length) addSticker();

    if ($numSams === 0) setStickers([]);

    if ($numSams > 2) {
      setShowShoo(true);
    } else {
      setShowShoo(false);
    }
  }, [$numSams]);

  return (
    <div className="stickers" style={{ viewTransitionName: "stickers" }}>
      <AnimatePresence>
        {stickers.map(({ id, variant }) => (
          <Sticker key={id} id={id} variant={variant} />
        ))}
        {showShoo && (
          <div className="shoo-wrapper">
            <motion.button
              data-sam-shoo
              type="button"
              onClick={clearSams}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              exit={{
                cursor: "default",
                scale: [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 0.8],
                x: [0, -8, -12, -12, 16, -36, 80, -48, 16, -8, 2, 0],
                // y: [0, 0, 0, 0, 0, 0, 0, 0],
                opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
              }}
            >
              Tell Sam to shoo?
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
