import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import $ from "jquery";
import sliderGirl from "../images/sliderGirl.png";
import SlideCard from "./Slider/SlideCard";
import SlideCard1 from "./SlideCard1";
import SlideCard12 from "./SlideCard12";
import SlideCard3 from "./SlideCard3";

function CustomSlider() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    console.log(scrollTop, "scrollTop");
    const firstSC = 500;
    const secondSC = 1250;
    if (scrollTop <= firstSC) {
      $(".indicat1").addClass("active");
      $(".indicat2").removeClass("active");
      $(".indicat3").removeClass("active");
    }
    if (scrollTop <= secondSC && scrollTop > firstSC) {
      $(".indicat2").addClass("active");
      $(".indicat1").removeClass("active");
      $(".indicat3").removeClass("active");
    }

    if (scrollTop > secondSC) {
      $(".indicat3").addClass("active");
      $(".indicat2").removeClass("active");
      $(".indicat1").removeClass("active");
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div style={{ display: "flex" }}>
      <div className="indicatMainCon">
        <div className="indicatCon">
          <a className="indicat indicat1" href="#s1"></a>
          <a className="indicat indicat2" href="#s2"></a>
        </div>
      </div>
      <Grid container style={{ position: "relative", display: "flex" }}>
        {/* <Grid item md={1} >

            </Grid> */}
        <Grid item md={12}>
          <Grid container px={3}>
            <Grid item md={6}>
              <div className="customSlider" id="s1">
                <SlideCard1 />
              </div>
              <div className="customSlider" id="s2">
                <SlideCard12 />
              </div>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Grid>
        <img src={sliderGirl} alt="..." className="sliderGirl" />
      </Grid>
    </div>
  );
}

export default CustomSlider;
