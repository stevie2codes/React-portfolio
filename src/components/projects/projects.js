import React from "react";
import "./projects.css";
import Card from "../Card";
import CardData from "../../utils/CardData";

import SectionAnimation from "../SectionAnimation";

function Projects(props) {
  return (
    <div>
      <h1 className="sectionTag">Projects</h1>
      <SectionAnimation />

      <div className="cardWrapper">
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
      </div>
    </div>
  );
}

export default Projects;
