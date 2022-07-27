import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Bounce from "react-reveal/Bounce";
import eric from "../../images/eric.jpg";
const Founder = () => {
  useEffect(() => {
    const $card = document.querySelector(".card");
    let bounds;

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      $card.querySelector(".glow").style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }

    $card.addEventListener("mouseenter", () => {
      bounds = $card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    });

    $card.addEventListener("mouseleave", () => {
      document.removeEventListener("mousemove", rotateToMouse);
      $card.style.transform = "";
      $card.style.background = "";
    });
  }, []);

  return (
    <div>
      <Bounce left>
        <h2
          className="text-white text-center mt-5 pt-5 joinCom"
          style={{ fontFamily: "ethnocentric" }}
        >
          {" "}
          message From the founder
        </h2>
      </Bounce>
      <br />
      <br />

      <div className="container">
        <Grid container spacing={2}>
          <Grid
            md={6}
            lg={6}
            xs={12}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div class="card">
              <div class="glow" />
            </div>
          </Grid>
          <Grid md={6} lg={6} xs={12} sm={12}>
            <h1
              className="info_paragraph"
              style={{ fontFamily: "ethnocentric" }}
            >
              Eric - Founder/CEO of Vault Coin
            </h1>
            <p className="info_paragrap">
              "As we move to the to future with the mass adoption of blockchain
              technology along with cryptocurrency, NFTs and the metaverse. The
              vault coin team is determined to be one of the top projects in the
              space. Developing projects that can compete with a high level of
              prestige. We face the future with optimism and determination
              delivering our mission. With Vault coin we open endless
              possibilities using blockchain technology, NFTs and the
              Metaverse."
            </p>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Founder;
