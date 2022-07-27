import React from "react";
import Bounce from "react-reveal/Bounce";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div>
      {" "}
      <Bounce left>
        <h2
          className="text-white text-center mt-5 pt-5 joinCom"
          style={{ fontFamily: "ethnocentric" }}
        >
          FAQ
        </h2>
      </Bounce>
      <div className="container">
        {" "}
        <br />
        <Bounce right>
          <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                What is the total supply of $VTC?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>1,000,000,000</Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce left>
          <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                What blockchain does Vault Coin use?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>BITGERT CHAIN</Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce right>
          <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                What is vault coin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
                Vault Coin is A NFT staking platform and marketplace for all
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce left>
          <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>What is Oasis?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
                Oasis is the metaverse that vault coin will be developing. it
                will connect different metaverse into one
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce right>
          <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                WHO IS THE ARTIST BEHIND THE PROJECT?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
                We have a few and they are listed under our team members
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <br />
      </div>
    </div>
  );
};

export default FAQ;
