import React from "react";

function SlideCard12({ smallScreen }) {
  return (
    <div style={{ width: "100%" }}>
      {/* This is used Changing the Color and Size og the First Slide Top Text*/}
      <h1 className="c1Head">ROADMAP </h1>

      <p className="roadmap_heading">PHASE 3 Q4 ( OCT - DEC 2022 )</p>
      <p className="roadmap_text">
        2ND STAKE-MINT CONTRACT AUDIT
        <br data-reactroot />
        OASIS DEVELOPMENT
        <br data-reactroot />
        INFLUENCER MARKETING AND COLLABORATION
        <br data-reactroot />
        MARKETING EXPANSION
        {/* This is used for changing the Gradient Color*/}
      </p>
      <p className="roadmap_heading">PHASE 4 Q1 ( JAN - MAR 2023 )</p>

      <p className="roadmap_text">
        {" "}
        BETA LAUNCH OF OASIS
        <br data-reactroot />
        OASIS NFT LAND SALE
        <br data-reactroot />
        NFT ONBOARDING
        {/* This is used for changing the Gradient Color*/}
      </p>
    </div>
  );
}

export default SlideCard12;
