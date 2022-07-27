import React from "react";
import { Grid } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import infoimg from "../../images/cup.png";
import infoimg1 from "../../images/band.png";
import infoimg2 from "../../images/fire.png";

const Features = () => {
  return (
    <Grid>
      <Bounce left>
        <h2
          className="text-white text-center mt-5 pt-5 joinCom"
          style={{ fontFamily: "ethnocentric" }}
        >
          Feature
        </h2>
      </Bounce>
      <br/>
      <br/>
      <br/>

      <Grid container spacing={2}>
        <Grid md={4} lg={4} sm={12} xs={12} className="containe">
          <div class="cards">
            <div class="image">
              <img href="#" src={infoimg} />
            </div>
            <div class="content">
              <h3>Lowest Fees</h3>
              <p>With only 1.5% marketplace feet</p>
            </div>
          </div>
        </Grid>
        <Grid md={4} lg={4} sm={12} xs={12} className="containe">
          <div class="cards">
            <div class="image">
              <img href="#" src={infoimg1} />
            </div>
            <div class="content">
              <h3>Stake-mint contract</h3>
              <p>A new bread of NFT staking contract</p>
            </div>
          </div>
        </Grid>
        <Grid md={4} lg={4} sm={12} xs={12} className="containe">
          <div class="cards">
            <div class="image">
              <img href="#" src={infoimg2} />
            </div>
            <div class="content">
              <h3>Token Burning System</h3>
              <p>
                A burning mechanism that will ensure the stability and longevity
                of the $VTC tokent
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Features;
