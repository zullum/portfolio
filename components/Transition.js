import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    width: '100%',
    x: '100%',
  },
  animate: {
    width: '0%',
    x: '0%',
  },
  exit: {
    width: ['0%, 100%'],
    x: ['0%, 100%'],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full z-30 h-screen w-screen bg-[#2e2257]"
        variants={transitionVariants}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full z-20 h-screen w-screen bg-[#3b2d71]"
        variants={transitionVariants}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full z-10 h-screen w-screen bg-[#4b3792]"
        variants={transitionVariants}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
