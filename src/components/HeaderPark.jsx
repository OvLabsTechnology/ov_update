import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import value from "../images/value.svg";
function Header({ hClass, linkCls }) {
  let navigate = useNavigate();
  const navClass = linkCls ? linkCls : "";
  const appendClass = hClass ? hClass : "";

  // useEffect(() => {
  //   if(linkCls === 'homeBar'){

  //   }
  // }, [linkCls])

  return (
    <Navbar bg="black" expand="lg" className={`header ${appendClass}`}>
      {/* <Navbar.Brand href="#home" className='header-logo'><span className='fH'>Be</span><span className='sH'>NFTs</span></Navbar.Brand> */}

      {/*  This Logo is used for the BluePrint Page */}

      {/*  This Logo is used for the Park Page */}
      {window.location.pathname === "/garden" && (
        <Navbar.Brand
          href="#home"
          onClick={() => {
            navigate(`/`);
          }}
          className="aniLogo"
        >
          <div className="logoText">
            <img src={value} alt="" />
          </div>
        </Navbar.Brand>
      )}

      {/*  This Logo is used for the Home Page */}

      {/*  This is the Navbar used for the Park Page */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#home"
            style={{
              borderRadius: "10px",
              flex: "0 0 auto",
              fontSize: "1rem",
              lineHeight: "140%",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "ethnocentric",
            }}
            className={`${navClass} park_page_navbar_other_icon`}
            onClick={() => {
              navigate(`/`);
            }}
          >
            HOME
          </Nav.Link>
          <Nav.Link
            href="#link"
            className={`${navClass} park_page_navbar_park_icon`}
            onClick={() => {
              navigate(`/garden`);
            }}
            style={{ fontFamily: "ethnocentric" }}
          >
            Roadmap
          </Nav.Link>

          {/* In Href Link you add links , here you will add twitter link  For Park Page*/}
          <Nav.Link
            style={{
              justifyContent: "center",
              AlignItems: "center",
              marginTop: "auto",
            }}
            href="https://twitter.com/VaultcoinLab"
            className={`${navClass} park_page_navbar_other_icon`}
          >
            <FaTwitter /> {/* Thats is used for twitter link   For Park Page*/}
          </Nav.Link>
          {/* In Href Link you add links , here you will add Instagram link   For Park Page*/}
        
          {/* In Href Link you add links , here you will add Discord link   For Park Page*/}
          <Nav.Link
            style={{
              justifyContent: "center",
              AlignItems: "center",
              marginTop: "auto",
            }}
            href="https://t.me/VaultcoinLab"
            className={`${navClass} park_page_navbar_other_icon`}
          >
            <FaTelegram/> {/* Thats is used for Discord link   For Park Page*/}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
