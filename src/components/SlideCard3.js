import React from "react";
import Grid from "@mui/material/Grid";
import galImg1 from "../images/galImg1.png";

const data = [
  {
    cardImg: galImg1,
    cardHead: "Gallery",
    cardDesc: "10,000 Azukis",
  },
  {
    cardImg: galImg1,
    cardHead: "Gallery",
    cardDesc: "10,000 Azukis",
  },
  {
    cardImg: galImg1,
    cardHead: "Gallery",
    cardDesc: "10,000 Azukis",
  },
  {
    cardImg: galImg1,
    cardHead: "Gallery",
    cardDesc: "10,000 Azukis",
  },
];

function SlideCard3({ smallScreen }) {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {!smallScreen && (
        <Grid container className="footerDiv slid3">
          <Grid item md={6} my={2}>
            <div className="blueprintBottomSMText">
              © 2022, BeNFTs <br /> We’re all gonna be BeNFTs.
            </div>
          </Grid>
        </Grid>
      )}
      {/* <h1 className='c1Head'>From The Alley </h1> */}

      <h1 className='c1Head'>Into the</h1>
      <h1 className='c1Head'>rabbit hole<span className='Opacity10'>//</span></h1>
      <h1 className="c1Head">
        
        <br data-reactroot />
        <span className="c1Head"></span>{" "}
        
      </h1>
      <p className="slid3P mb-4">
        To the ones with the courage to jump down a peculiar rabbit hole.
        <br data-reactroot />
        One that pulls you away from a world that's created by many and owned by
        few...
      </p>
      <div className="py-3 galCon">
        <Grid container columnSpacing={3} rowSpacing={2}>
          {data.map((item, index) => {
            return (
              <Grid item xs={6}>
                <div className="galCard">
                  <Grid container pr={1}>
                    <Grid item xs={5}>
                      <img
                        src={item.cardImg}
                        alt="galImg1"
                        className="galImg w-100"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={7}
                      style={{
                        display: "flex",
                        alignItems: "end",
                        justifyContent: "end",
                        flexDirection: "column",
                      }}
                    >
                      <p className="galHead mb-0">{item.cardHead}</p>
                      <p className="galDesc">{item.cardDesc}</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default SlideCard3;
