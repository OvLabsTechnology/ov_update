import React from "react";

function SlideCard1({ smallScreen }) {
  return (
    <div style={{ width: "100%" }}>
      {/* This is used Changing the Color and Size og the First Slide Top Text*/}
      <h1 className="c1Head">ROADMAP </h1>

      <p className="roadmap_heading">PHASE 1 Q2 ( MAY - JUNE 2022 )</p>
      <p className="roadmap_text">
        WHITEPAPER CREATION SOCIAL
        <br data-reactroot />
        SOCIAL MEDIA CREATION
        <br data-reactroot />
        WEBSITE, DISCORD AND
        <br data-reactroot />
        WHITEPAPER RELEASE
        <br data-reactroot />
        $VTC PRESALE BY SPHYNX LABS
        <br data-reactroot />
        NFT WHITELIST CONTEST
        <br data-reactroot />
        NFT GIVE-A-WAY CONTEST
        <br data-reactroot />
        MINTING SITE LAUNCH
        {/* This is used for changing the Gradient Color*/}
      </p>
      <p className="roadmap_heading">PHASE 2 Q3 ( JULY - SEPT 2022 )</p>

      <p className="roadmap_text">
        {" "}
        NFT PRESALE MINTING
        <br data-reactroot />
        NFT PUBLIC SALE MINTING
        <br data-reactroot />
        STAKING PLATFORM LAUNCH
        <br data-reactroot />
        STAKE-MINT CONTRACT AUDIT
        <br data-reactroot />
        MARKETPLACE LAUNCH
        {/* This is used for changing the Gradient Color*/}
      </p>

      {!smallScreen && (
        <p style={{ display: "flex" }}>
          <span className="roadmap_heading">ROADMAP </span>
          <span className="Opacity10">//</span>
          {/*This is used for the Button on the First Slide of the Park Page*/}
          <a href="#s2" className="weDidBtn py-1 px-3 ml-2">
            More ↓
          </a>
        </p>
      )}
    </div>
  );
}

export default SlideCard1;
