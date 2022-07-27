import React from "react";
import Header from "../components/Header";
import homeChildsPic from "../images/homeChildsPic.png";

import rainBow from "../images/rainBow.png";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <div className="home">
      {" "}
      {/* This css code is  use for the height of the home Page*/}
      <Header hClass={"hPosAbsolute "} />
      <div className="homeBgCon"></div>{" "}
      {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}{" "}
      {/* THIS JAVASCRIPT CODE IS FOR Header on the Home Page*/}
      <Grid container className="footerDiv" px={{ xs: 1, sm: 4 }}>
        {" "}
        {/* THIS JAVASCRIPT CODE IS FOR the Bottom text  we have on the Home Page*/}
        <Grid item md={6} my={2}>
          <div className="blueprintBottomSMText">
            {" "}
            {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}
            © 2022, BeNFTs
            <br /> We’re all gonna be BeNFTs.
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        className="h-100"
        style={{ position: "absolute", bottom: "0px" }}
      >
        <img src={rainBow} alt="homeRainBowPic" className="homeRainBow " />{" "}
        {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}
        <div className="homeCloudCon">
          <Grid
            item
            md={12}
            xs={10}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* image of capsoule */}
            <img src={homeChildsPic} alt="cloud" className="homeCloud " />{" "}
            {/* THIS JAVASCRIPT CODE IS FOR  Capsule Image on the Home Page and inside of ClassName 'homeCloud'  You can see the Clouds Png Attached to it on index.css File*/}
            <div class="shadowCapsoul"> </div>{" "}
            {/* THIS JAVASCRIPT CODE IS FOR The Hover Affect Shadow  on the Home Page*/}
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Home;
