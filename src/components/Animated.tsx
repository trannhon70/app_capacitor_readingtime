import React from "react";
import { AnimatePresence } from "framer-motion";

export const Animated = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};
