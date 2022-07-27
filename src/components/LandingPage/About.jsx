import React from "react";
import card10 from "../../images/vcoin.png";
const About = () => {
  return (
    <div>
      {" "}
      <h1
        className="text-white text-center mt-5 pt-5 joinCom"
        style={{ fontFamily: "ethnocentric" }}
      >
        About Us
      </h1>
      <div className="container">
        <p className="text-white text-center  pt-3 joinComs">
          Vault coin is a NFT staking platform in the Bitgert network that
          allows NFT owners to stake their NFTs and earn staking rewards at the
          same time they are able to trade the staked NFT asset in the Vault
          marketplace. The platform will use its own token $VTC to use for the
          buying and selling of NFTs on our marketplace. The token will also be
          used for the staking rewards of NFTs that are being staked.
        </p>
        <p className="text-white text-center   joinComs">
          Our mission is to tap into the immerse potential of NFT assets
          providing new utility and converting it into the metaverse to attract
          more the larger fan base of followers and fans. The project inteneds
          to develop a cryptocurrency that would be both accessible and
          affordable for the vast majority of decentralized market participants
        </p>
        <p className="text-white text-center   joinComs">
          Our mission is to tap into the immerse potential of NFT assets
          providing new utility and converting it into the metaverse to attract
          more the larger fan base of followers and fans. The project inteneds
          to develop a cryptocurrency that would be both accessible and
          affordable for the vast majority of decentralized market participants
        </p>
      </div>
      <div className="container joinCo"  style={{ height: "100%" , justifyContent:"center" , display:"flex" }}> 
        <img src={card10} style={{ height: "100%"  }} />
      </div>
    </div>
  );
};

export default About;
