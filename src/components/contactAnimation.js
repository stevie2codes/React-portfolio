import React from "react";
import Lottie from "react-lottie";
import "./styles.css/sectionAnimation.css";
function ContactAnimation(props) {
  const lottieOptions = {
    loop: true,
    autoPlay: true,
    renderer: "svg",
    animationData: require("../animations/contactAnimation.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="ContactAnimation">
      <Lottie options={lottieOptions} width={150} height={"auto"} />
    </div>
  );
}
export default ContactAnimation;
