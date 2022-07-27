import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
  } from "mdb-react-ui-kit";
  
  import RubberBand from "react-reveal/RubberBand";
  
  
  import { BsTelegram, BsInstagram, BsTwitter, BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <MDBFooter
    className=" text-center text-white"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
  >
    <MDBContainer className="p-4 pb-0">
      

    <RubberBand>
      <h1
        style={{
          color: "#fff",
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {" "}
        JOIN THE COMMUNITY
      </h1>
      </RubberBand>
      <section className="mb-4">
       

       

        <RubberBand>
          <a className="btn btn-outline-light m-3" href="https://twitter.com/VaultcoinLab" role="button" style={{borderRadius:"20px"}}>
            <BsTwitter />
          </a>
        </RubberBand>


        <RubberBand>
        <a className="btn btn-outline-light m-3" href="https://t.me/VaultcoinLab" role="button" style={{borderRadius:"20px"}}>
          <BsTelegram />
        </a>
      </RubberBand>

       
      </section>
    </MDBContainer>

    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      © 2022 Copyright : 
      <a className="text-white" href="">
       Ov Labs Technology, OPC
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer