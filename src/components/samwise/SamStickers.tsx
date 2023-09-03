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
import { getRandomValueBetween } from "../../helpers";

// This image total must match the number of images in the /sam directory
const SAM_IMAGE_TOTAL = 7;

// Pixel buffer to prevent stickers from going off the canvas
const BUFFER = 200;

type SamStickerProps = {
  id: string;
  src: string;
  alt: string;
};

const SamSticker = ({ src, alt }: SamStickerProps) => {
  const $topZIndex = useStore(topZIndex);
  const [zIndex, setZIndex] = useState($topZIndex);
  const [x, setX] = useState(
    getRandomValueBetween(0, document.body.clientWidth - BUFFER)
  );
  const [y, setY] = useState(
    getRandomValueBetween(0, document.body.clientHeight - BUFFER)
  );
  const [rotate, _setRotate] = useState(getRandomValueBetween(-10, 10));

  const initialRotation = rotate + getRandomValueBetween(-20, 20);

  const handleDragStart: DragHandlers["onDragStart"] = () => {
    incrementTopZIndex();
    setZIndex($topZIndex);
  };

  const handleDragEnd: DragHandlers["onDragEnd"] = (_, info) => {
    const { x, y } = info.point;
    setX(x);
    setY(y);
  };

  function getNearestOffCanvasCoordinates(
    x: number,
    y: number,
    offset: number
  ): { x: number; y: number } {
    const canvasWidth = document.body.clientWidth;
    const canvasHeight = document.body.clientHeight;

    // Calculate the center of the canvas
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    // Calculate the vector from the center of the canvas to the input point
    const dx = x - centerX;
    const dy = y - centerY;

    // Calculate the length of the vector
    const length = Math.sqrt(dx * dx + dy * dy);

    // Calculate the normalized direction vector
    const normalizedDx = dx / length;
    const normalizedDy = dy / length;

    // Calculate the off-canvas coordinates by moving in the direction of the normalized vector
    // by the specified offset, taking the point off the canvas
    const offCanvasX = x + normalizedDx * (canvasWidth + offset);
    const offCanvasY = y + normalizedDy * (canvasHeight + offset);

    return { x: offCanvasX, y: offCanvasY };
  }

  return (
    <motion.img
      className={styles.samSticker}
      src={src}
      alt={alt}
      initial={{ opacity: 0, x, y, scale: 2, rotate: initialRotation }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
        transition: { type: "spring", damping: 8, mass: 0.2, stiffness: 80 },
      }}
      exit={{
        ...getNearestOffCanvasCoordinates(x, y, 100),
        transition: {
          type: "spring",
          damping: 10,
          mass: 4,
          stiffness: 100,
          delay: getRandomValueBetween(0.2, 0.7),
        },
      }}
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.3 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ zIndex: zIndex }}
    />
  );
};

const SamStickers = () => {
  const [sams, setSams] = React.useState<SamStickerProps[]>([]);

  const $numSams = useStore(numSams);

  const showNewSticker = () => {
    const createNewSamSticker = (): SamStickerProps => {
      return {
        id: nanoid(),
        src: `/images/sam/sam-${$numSams % SAM_IMAGE_TOTAL}.png`,
        alt: "Samwise",
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
        {sams.length >= SAM_IMAGE_TOTAL && (
          <motion.button
            className={styles.shooButton}
            onClick={handleClear}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", bounce: 0.5 },
            }}
            exit={{ opacity: 0, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            shoo!
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SamStickers;
