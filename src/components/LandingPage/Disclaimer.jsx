import React from "react";
import Tickers from "./Ticker";
import Bounce from "react-reveal/Bounce";
const Disclaimer = () => {
  return (
    <div>
      <Tickers />
      <Bounce left>
        <div className="container">
          <p className="text-white text-center mt-5 pt-5 disclaimer">
            The Vault Coin project is not an investment in any way and is not a
            security since does not have the legal qualification as a security.
            The possession or ownership of the Vault coin token does not grant
            any title, right, or interest in any company, enterprise or
            undertaking, and does not grant the owner a share of any revenue or
            profits outside of the capital gains (or losses) they might realize
            in trading on the exchanges or community. The token grants the no
            property or administrative rights in the company, or any voting
            rights in resolutions of the company, participation rights at
            shareholder meetings of the company or others shareholder rights. As
            pure utility tokens, Vault Coin are not suitable as an investment or
            assest in the business development of the company
          </p>
        </div>
      </Bounce>
      <Bounce left>
        <div className="container">
          <p className="text-white text-center mt-5 pt-5 disclaimer">
            This Whitepaper has been written to provide a detailed overview of
            Vault Coin as a crypto asset for investors, professional traders and
            individual users. It aims to answer the majority of questions that
            investors/platform users might have. It is not intended that this
            document will deliver exhaustive technical explanations or
            validations. Vault Coin will provide more detailed information about
            our rational and chosen methodologies as well as detailed technology
            specifications for the platform solutions as they are launched.
            Including security protocols that deliver customer and crypto asset
            protectio.
          </p>
        </div>
      </Bounce>
      <Tickers />
    </div>
  );
};

export default Disclaimer;
