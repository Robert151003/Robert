import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="min-h-screen flex items-center justify-center"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Wrapper around the component to handle padding and centring */}
        <div className={`${styles.padding} flex flex-col items-center justify-center`}>
          <Component />
        </div>
      </motion.section>
    );
  };

export default StarWrapper;
