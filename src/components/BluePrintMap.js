import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import $ from "jquery";
import ShowModel from "./ShowModel";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function BluePrintMap() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [model, setModel] = useState(0);

  useEffect(() => {
    if (model === 0) {
      $(".parkModel").addClass("Opacity0");
      $(".parkModel").removeClass("Opacity1");
    } else {
      $(".parkModel").addClass("Opacity1");
      $(".parkModel").removeClass("Opacity0");
    }
    console.log(model, "model");
  }, [model]);

  return (
    <Grid container className="blueprintPage" px={2}>
      <Grid container py={5} justifyContent={"center"}>
        <Grid item md={10} xs={12} style={{ position: "relative" }}>
          <h1 className="heading8">Blueprint</h1>{" "}
          {/*  This class heading8 is used for the BluePrint Page First Heading*/}
          <h2 className="h2Heading">We're Building this together</h2>{" "}
          {/*  This class h2Heading is used for the BluePrint Page Second Heading*/}
          {/* This is used For the desktop view Blue print Map*/}
          {!smallScreen && (
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              style={{
                position: "relative",
                height: "40vw",
                maxHeight: "80vh",
              }}
            >
              <div className="thePark" onClick={() => setModel(1)}>
                <div className="theParkBtn">The Park</div>{" "}
                {/*class =  theParkBtn is used for change color of Blueprint Map Buttons */}
                <div className="parkHover"></div>
                  {/*class =  parkHover is used for change Park Map Shape Hover Image the image is linked in Css File */}
              </div>

              <Grid container className="MapMap" spacing={2}>
                <Grid item xs={3}>
                  <Grid container style={{ height: "100%" }}>
                    <a
                      className="bearMarkete sidePark"
                      onClick={() => setModel(2)}
                    >
                      <div className="bearMarketeBtn">Bear Market</div> {/* In this you will see class = bearMarketeBtn that is used for changing btn color */}
                      {/* <div className='bearMarketeHover sideParkHover'></div> */}
                      {/* <div className='bearMarkete sideParkHover'></div> */}
                    </a>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    columnSpacing={2}
                    style={{ marginBottom: "18px" }}
                  >
                    <Grid item xs={6}>
                      <Grid container>
                       {/* <div className='bearMarkete sideParkHover'></div> */}
                        <a
                          className="workShop centerDiv" 
                          onClick={() => setModel(3)}
                        >
                          <div className="bearMarketeBtn">Workshop</div>
                          {/* <div className='workShop centerDivHover'></div> */}
                        </a>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container>
                        <a
                          className="gallery centerDiv"
                          onClick={() => setModel(4)}
                        >
                          <div className="bearMarketeBtn">gallery</div>
                          {/* <div className='gallery centerDivHover'></div> */}
                        </a>
                      </Grid>
                    </Grid>
                    {/* <Grid item xs={6} >
                            <Grid container>
                              <a className='studio centerDiv' onClick={()=>setModel(5)} >
                                 <div className='bearMarketeBtn'>
                                    studio
                                  </div>
                                  <div className='studio centerDivHover'></div>
                              </a>
                            </Grid>
                          </Grid>
                          <Grid item xs={6} >
                            <Grid container>
                              <a className='boutique centerDiv' onClick={()=>setModel(6)} >
                                 <div className='bearMarketeBtn'>
                                    boutique
                                  </div>
                                  <div className='boutique centerDivHover'></div>
                              </a>
                            </Grid>
                          </Grid> */}
                  </Grid>
                  <Grid container columnSpacing={2}>
                    <Grid item xs={6}>
                      <Grid container>
                        <a
                          className="studio centerDiv"
                          onClick={() => setModel(5)}
                        >
                          <div className="bearMarketeBtn">studio</div>
                          {/* <div className='studio centerDivHover'></div> */}
                        </a>
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container>
                        <a
                          className="boutique centerDiv"
                          onClick={() => setModel(6)}
                        >
                          <div className="bearMarketeBtn">boutique</div>
                          {/* <div className='boutique centerDivHover'></div> */}
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <a className="platForm sidePark" onClick={() => setModel(7)}>
                    <div className="bearMarketeBtn">Platform</div>
                    {/* <div className='platFormHover sideParkHover'></div> */}
                  </a>
                </Grid>
              </Grid>
              <ShowModel model={model} setModel={setModel} />
            </Grid>
          )}
          {/* This is used For the mobile view Blue print Map*/}
          {smallScreen && (
            <Grid container className="mapContainerMobile">
              <Grid container className="mapContainer">
                <Grid
                  container
                  className="MapMap"
                  spacing={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <div className="thePark" onClick={() => setModel(1)}>
                    <div className="theParkBtn">The Park</div>
                    <div className="parkHover"></div>
                  </div>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Grid container>
                          <a
                            className="workShop centerDiv"
                            onClick={() => setModel(3)}
                          >
                            <div className="bearMarketeBtn workShopBtn">
                              Workshop
                            </div>
                            {/* <div className='workShop centerDivHover'></div> */}
                          </a>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container>
                          <a
                            className="gallery centerDiv"
                            onClick={() => setModel(4)}
                          >
                            <div className="bearMarketeBtn glleryBtn">
                              gallery
                            </div>
                            {/* <div className='gallery centerDivHover'></div> */}
                          </a>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container>
                          <a
                            className="studio centerDiv"
                            onClick={() => setModel(5)}
                          >
                            <div className="bearMarketeBtn studioBtn">
                              studio
                            </div>
                            {/* <div className='studio centerDivHover'></div> */}
                          </a>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container>
                          <a
                            className="boutique centerDiv"
                            onClick={() => setModel(6)}
                          >
                            <div className="bearMarketeBtn boutiqueBtn">
                              boutique
                            </div>
                            {/* <div className='boutique centerDivHover'></div> */}
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className="part2MapMobile" spacing={2}>
                  <Grid item xs={6}>
                    <Grid container>
                      <a
                        className="bearMarkete sidePark"
                        onClick={() => setModel(2)}
                      >
                        <div className="bearMarketeBtn">Bear Market</div>
                        {/* <div className='bearMarketeHover sideParkHover'></div> */}
                      </a>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <a
                      className="platForm sidePark"
                      onClick={() => setModel(7)}
                    >
                      <div className="bearMarketeBtn">Platform</div>
                      {/* <div className='platFormHover sideParkHover'></div> */}
                    </a>
                  </Grid>
                </Grid>
                <ShowModel model={model} setModel={setModel} />
              </Grid>
            </Grid>
          )}
          <Grid container>
            <Grid item md={6} my={5}>
              <div className="blueprintBottomText">
                We’re not just releasing a roadmap; we’re laying out the
                blueprint to help guide and build a community-centric,
                world-leading web three brand.
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={6} my={2}>
              <div className="blueprintBottomSMText">
                © 2022, BeNFTs <br /> We’re all gonna be BeNFTs.
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BluePrintMap;
