import React from "react";
import Lottie from "react-lottie";
import "./styles.css/sectionAnimation.css";
function SectionAnimation(props) {
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
    <div className="sectionAnimation">
      <Lottie options={lottieOptions} width={300} height={"auto"} />
    </div>
  );
}
export default SectionAnimation;
