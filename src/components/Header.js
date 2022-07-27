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
      {window.location.pathname === "/blueprint" && (
        <Navbar.Brand
          href="#home"
          onClick={() => {
            navigate(`/`);
          }}
          className="aniLogo blueprintLogo"
        >
          <div className="logoText">
            <img src={value} alt="" />
          </div>
        </Navbar.Brand>
      )}

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
      {window.location.pathname === "/" && (
        <Navbar.Brand
          href="#home"
          onClick={() => {
            navigate(`/`);
          }}
          className="aniLogoHomes"
        >
          <div className="logoTextHome">
            <img src={value} alt="" />
          </div>
        </Navbar.Brand>
      )}

      {/*  This is the Navbar used for the Home Page */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#home"
            style={{ fontFamily: "ethnocentric" }}
            className={`${navClass} home_page_navbar_home_icon`}
            onClick={() => {
              navigate(`/`);
            }}
          >
            HOME
          </Nav.Link>
          <Nav.Link
            href="#link"
            style={{ fontFamily: "ethnocentric" }}
            className={`${navClass} home_page_navbar_other_icons`}
            onClick={() => {
              navigate(`/garden`);
            }}
          >
            Roadmap
          </Nav.Link>

          {/* In Href Link you add links , here you will add twitter link  For Home Page*/}
          <Nav.Link
            href="https://twitter.com/VaultcoinLab"
            className={`${navClass} home_page_navbar_other_icons`}
            style={{
              justifyContent: "center",
              AlignItems: "center",
              marginTop: "auto",
            }}
          >
            <FaTwitter />
            {/* Thats is used for twitter link   For Home Page*/}
          </Nav.Link>
        
          {/* In Href Link you add links , here you will add Discord link   For Home Page*/}
          <Nav.Link
            href="https://t.me/VaultcoinLab"
            className={`${navClass} home_page_navbar_other_icons`}
            style={{
              justifyContent: "center",
              AlignItems: "center",
              marginTop: "auto",
            }}
          >
            <FaTelegram />
            {/* Thats is used for discord link   For Home Page*/}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
