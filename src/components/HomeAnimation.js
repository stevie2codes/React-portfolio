import React from "react";
import Lottie from "react-lottie";
import "./styles.css/homeAnimation.css";
function ProjectAnimation(props) {
  const lottieOptions = {
    loop: true,
    autoPlay: true,
    renderer: "svg",
    animationData: require("../animations/blob.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="homeAnimation">
      <Lottie options={lottieOptions} width={"90vmin"} height={"auto"} />
    </div>
  );
}
export default ProjectAnimation;
