import React from "react";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <React.Fragment>
      <motion.div
        initial={{ scale: 0 }}
        className="nameContainer"
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      />
      ;<h1 className="firstName">Stephen Webb</h1>
    </React.Fragment>
  );
}

export default Home;
