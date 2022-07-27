import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import card1 from "../../images/jg1.jpg";
import card2 from "../../images/jg2.jpg";
import card3 from "../../images/jg3.jpg";
import card4 from "../../images/jg4.jpg";
import card5 from "../../images/jg5.jpg";
import card6 from "../../images/jg6.jpg";
import card7 from "../../images/jg7.jpg";
import card8 from "../../images/jg8.jpg";
import card9 from "../../images/jg9.jpg";
import card10 from "../../images/jg10.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Bounce from "react-reveal/Bounce";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Vslider = () => {
  return (
    <div>
      <h1
        className="text-white text-center mt-5 pt-5 joinCom"
        style={{ fontFamily: "ethnocentric" }}
      >
        Kunoichi
      </h1>
      <div className="container">
        <p
          className="text-white text-center  joinComs"
          style={{ fontFamily: "ethnocentric" }}
        >
          Vault Coin’s official NFT collection
        </p>
      </div>
      <div className="container">
        <p className="text-white text-center  pt-2 joinComs">
          Kunoichi NFT is a status symbol and prestige in our community. Our
          value expands far wider than just being an avatar-NFT in the digital
          world, for we are a movement bringing social awareness on racism and
          bullying. Owning one is a proof of being part of the leading social
          club shaping the future with NFT in the WORLD. We are more than just a
          NFT alone, for our value is based on how much impact we bring, as a
          community, inside and outside of crypto and unto our society.
        </p>
      </div>

      <Bounce>
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="mySwiper"
           
          >
            <SwiperSlide >
              <img src={card1} style={{ height: "100%" }} />
            </SwiperSlide>

            <br />
            <SwiperSlide>
              <img src={card2} style={{ height: "100%" }} />
            </SwiperSlide>
            <br />
            <SwiperSlide>
              <img src={card3} style={{ height: "100%" }} />
            </SwiperSlide>
            <br />
            <SwiperSlide>
              <img src={card4} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card5} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card6} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card6} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card7} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card8} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card9} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card10} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card1} style={{ height: "100%" }} />
            </SwiperSlide>

            <br />
            <SwiperSlide>
              <img src={card2} style={{ height: "100%" }} />
            </SwiperSlide>
            <br />
            <SwiperSlide>
              <img src={card3} style={{ height: "100%" }} />
            </SwiperSlide>
            <br />
            <SwiperSlide>
              <img src={card4} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card5} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card6} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card6} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card7} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card8} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card9} style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={card10} style={{ height: "100%" }} />
            </SwiperSlide>
          </Swiper>
        </>
      </Bounce>
    </div>
  );
};

export default Vslider;
