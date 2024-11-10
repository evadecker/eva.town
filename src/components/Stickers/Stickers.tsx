import { useStore } from "@nanostores/react";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { clearSams, numSams } from "../../stores/sam";
import { Sticker, type StickerProps } from "./Sticker";

export const Stickers = () => {
  const [stickers, setStickers] = useState<StickerProps[]>([]);
  const [showShoo, setShowShoo] = useState(false);
  const [exiting, setExiting] = useState(false);
  const $numSams = useStore(numSams);

  const addSticker = () => {
    const getNewSticker = () => ({
      id: nanoid(),
      variant: $numSams,
    });
    setStickers((prev) => [...prev, getNewSticker()]);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: addSticker changes on every render and should not be used as a dependency
  useEffect(() => {
    if ($numSams > stickers.length) addSticker();

    if ($numSams === 0) setStickers([]);

    if ($numSams > 2) {
      setShowShoo(true);
    } else {
      setShowShoo(false);
    }
  }, [$numSams, stickers]);

  const handleShoo = () => {
    setExiting(true);
    clearSams();
    setTimeout(() => {
      setExiting(false);
    }, 300);
  };

  return (
    <div className="stickers" style={{ viewTransitionName: "stickers" }}>
      <AnimatePresence>
        {stickers.map(({ id, variant }) => (
          <Sticker key={id} id={id} variant={variant} />
        ))}
        {showShoo && (
          <div className="shoo-wrapper">
            <button
              data-sam-shoo
              onClick={handleShoo}
              className={classNames({
                exiting,
              })}
              type="button"
            >
              Shoo Sam
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
