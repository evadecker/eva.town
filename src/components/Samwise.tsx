import { motion } from "framer-motion";
import React from "react";

const Samwise = () => {
  return (
    <motion.div drag whileDrag={{ scale: 1.2 }} dragMomentum={false}>
      One Samwise
    </motion.div>
  );
};

export default Samwise;
