import React from "react";
import Particles from "react-particles-js";
const ParticlesElement = () => {
  return (
    <div>
      <Particles
        width={"100vw"}
        height={"100vh"}
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 900
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              speed: 1,
              out_mode: "out"
            },
            shape: {
              type: "image",
              image: [
                {
                  src:
                    "https://res.cloudinary.com/df9q0hnuw/image/upload/v1595003990/Logos/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081_rjbo6d.png",
                  height: 20,
                  width: 20
                },
                {
                  src:
                    "https://res.cloudinary.com/df9q0hnuw/image/upload/v1595004111/Logos/kisspng-sass-logo-cascading-style-sheets-scalable-vector-g-codzero-cms-blog-tool-publishing-platform-5b74aaa12bfc04.1827984715343725131802_gm0zoc.png",
                  height: 20,
                  width: 20
                },
                {
                  src:
                    "https://res.cloudinary.com/df9q0hnuw/image/upload/v1595004190/Logos/kisspng-css3-cascading-style-sheets-logo-html-5ae0e587e74507.6976263715246882639473_lkjdwy.png",
                  height: 20,
                  width: 20
                },
                {
                  src:
                    "https://res.cloudinary.com/df9q0hnuw/image/upload/v1595004278/Logos/kisspng-user-interface-design-figma-computer-software-user-5b224261078575.0726675615289718730308_yymhew.png",
                  height: 20,
                  width: 20
                },
                {
                  src:
                    "https://res.cloudinary.com/df9q0hnuw/image/upload/v1595004461/Logos/kisspng-javascript-logo-html-comment-blog-5ae63c23139110.5436874015250381150802_waww6m.png",
                  height: 20,
                  width: 20
                },
                {
                  src:
                    "https://res.cloudinary.com/df9q0hnuw/image/upload/v1596753730/Logos/vuelogo_guf4lm.png",
                  height: 20,
                  width: 20
                }
              ]
            },
            color: {
              value: "#CCC"
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false
              }
            }
          },
          retina_detect: false
        }}
      />
    </div>
  );
};
export default ParticlesElement;
