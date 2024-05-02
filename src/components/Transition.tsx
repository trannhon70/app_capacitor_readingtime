import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export const Transitions = ({ children }) => {
  return (
    // @ts-ignore
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
