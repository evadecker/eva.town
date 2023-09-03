import { AnimatePresence, motion, type DragHandlers } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import styles from "./samstickers.module.css";
import { nanoid } from "nanoid";
import {
  numSams,
  topZIndex,
  incrementTopZIndex,
  clearSams,
} from "../../stores/sam";

type SamStickerProps = {
  id: string;
  src: string;
  alt: string;
  x: number;
  y: number;
  rotate: number;
};

const SamSticker = ({ src, alt, x, y, rotate }: SamStickerProps) => {
  const $topZIndex = useStore(topZIndex);
  const [zIndex, setZIndex] = useState($topZIndex);

  const handleDragStart: DragHandlers["onDragStart"] = () => {
    incrementTopZIndex();
    setZIndex($topZIndex);
  };

  return (
    <motion.img
      className={styles.samSticker}
      src={src}
      alt={alt}
      initial={{ opacity: 0, x: x, y: y, scale: 2, rotate: rotate }}
      animate={{ opacity: 1, scale: 1 }}
      // Todo: get direction to flyout on exit
      exit={{ x: 4000, y: 4000 }}
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.2 }}
      onDragStart={handleDragStart}
      style={{ zIndex: zIndex }}
    />
  );
};

// This image total must match the number of images in the /sam directory
const SAM_IMAGE_TOTAL = 7;

// Pixel buffer to prevent stickers from going off the canvas
const BUFFER = 200;

const SamStickers = () => {
  const [sams, setSams] = React.useState<SamStickerProps[]>([]);

  const $numSams = useStore(numSams);

  const showNewSticker = () => {
    const getRandomValueBetween = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const createNewSamSticker = (): SamStickerProps => {
      const x = getRandomValueBetween(0, document.body.clientWidth - BUFFER);
      const y = getRandomValueBetween(0, document.body.clientHeight - BUFFER);
      const rotate = getRandomValueBetween(-20, 20);

      return {
        id: nanoid(),
        src: `/images/sam/sam-${$numSams % SAM_IMAGE_TOTAL}.png`,
        alt: "Samwise",
        x: x,
        y: y,
        rotate: rotate,
      };
    };

    setSams((prev) => [...prev, createNewSamSticker()]);
  };

  useEffect(() => {
    if ($numSams > 0) showNewSticker();
  }, [$numSams]);

  const handleClear = () => {
    setSams([]);
    clearSams();
  };

  return (
    <div className={styles.samStickers}>
      <AnimatePresence>
        {sams.map((props) => (
          <SamSticker key={props.id} {...props} />
        ))}
        {sams.length >= 10 && (
          <button className={styles.shooButton} onClick={handleClear}>
            shoo!
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SamStickers;
