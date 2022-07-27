import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Grid from "@mui/material/Grid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SlideCard1 from "./SlideCard1";
import SlideCard2 from "./SlideCard12";
import SlideCard3 from "./SlideCard3";

import { FreeMode, Navigation, Thumbs } from "swiper";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function MobileSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Grid container px={2}>
            <SlideCard1 smallScreen={smallScreen} />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container px={2}>
            <SlideCard2 smallScreen={smallScreen} />
          </Grid>
        </SwiperSlide>
      </Swiper>
      <div className="swipatbottom">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
            {/* When you move towards Mobile View Here you can Change the Slider Text */}
            <div className="bottomSlidDiv px-4">
              <p className="Ctitle m-0">01.</p>
              <p className="Cdesc m-0">ROADMAP</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}
            {/* When you move towards Mobile View Here you can Change the Slider Text */}
            <div className="bottomSlidDiv px-4">
              <p className="Ctitle m-0">02.</p>
              <p className="Cdesc m-0">ROADMAP</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default MobileSlider;
