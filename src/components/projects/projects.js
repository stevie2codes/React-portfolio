import React from "react";
import "./projects.css";
import Card from "../Card";
import CardData from "../../utils/CardData";
import { motion } from "framer-motion";
import SectionAnimation from "../SectionAnimation";

function Projects(props) {
  return (
    <div>
      <h1 className="sectionTag">Projects</h1>
      <SectionAnimation />

      <motion.div
        className="cardWrapper"
        initial={{ opacity: 0, left: -100 }}
        animate={{ opacity: 1, left: "50%" }}
      >
        {CardData.map(data => (
          <Card
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image}
            siteLink={data.siteLink}
            githubLink={data.githubLink}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
