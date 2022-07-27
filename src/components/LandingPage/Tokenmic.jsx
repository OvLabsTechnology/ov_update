import React from "react";
import flogo1 from "../../images/flogo1.png";
import flogo2 from "../../images/flogo2.png";
import flogo3 from "../../images/flogo3.png";
import coin from "../../images/coins.png";
import embr from "../../images/emb.png";
import man from "../../images/man.png";
import Bounce from "react-reveal/Bounce";

import Wobble from "react-reveal/Wobble";
const Tokenmic = () => {
  return (
    <div>
      {" "}
      <div className="section5 mt-5">
        <Bounce left>
          <h2
            className="text-white text-center mt-5 pt-5 joinCom"
            style={{ fontFamily: "ethnocentric" }}
          >
            Partners & advisors
          </h2>
        </Bounce>
        <div className="row Con10sec4 pb-5">
          <div className="col-md-12">
            <div className="fContainer">
              <Wobble>
                <img src={flogo1} alt="..." className="F1Log" />
              </Wobble>

              <Wobble>
                <img src={flogo2} alt="..." className="F2Log" />
              </Wobble>

              <Wobble>
                <img src={flogo3} alt="..." className="F2Log" />
              </Wobble>
            </div>
          </div>
        </div>

        <div className="row Con10sec4 pb-5">
          <div className="col-md-12">
            <div className="fContainer">
              <Wobble>
                <img src={coin} alt="..." className="F1Log" />
              </Wobble>

              <Wobble>
                <img src={man} alt="..." className="F2Log" />
              </Wobble>

              <Wobble>
                <img src={embr} alt="..." className="F2Log" />
              </Wobble>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenmic;
