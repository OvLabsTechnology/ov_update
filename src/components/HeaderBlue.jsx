import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
function Header({ hClass, linkCls }) {
  let navigate = useNavigate();
  const navClass = linkCls ? linkCls : "";
  const appendClass = hClass ? hClass : "";

  // useEffect(() => {
  //   if(linkCls === 'homeBar'){

  //   }
  // }, [linkCls])

  return (
    <Navbar bg="light" expand="lg" className={`header ${appendClass}`}>
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
          <div className="logoText">BeNFTs</div>
        </Navbar.Brand>
      )}

      {/*  This Logo is used for the Park Page */}

      {/*  This is the Navbar used for the BluePrint Page */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#home"
            style={{
              borderRadius: "3px",
              flex: "0 0 auto",
              fontSize: "1rem",
              lineHeight: "140%",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
            }}
            className={`${navClass} blue_print_page_navbar_other_icons`}
            onClick={() => {
              navigate(`/`);
            }}
          >
            HOME
          </Nav.Link>
          <Nav.Link
            style={{
              borderRadius: "3px",
              flex: "0 0 auto",
              fontSize: "1rem",
              lineHeight: "140%",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
            }}
            href="#link"
            className={`${navClass} blue_print_page_navbar_other_icons`}
            onClick={() => {
              navigate(`/garden`);
            }}
          >
            PARK
          </Nav.Link>
          <Nav.Link
            style={{
              backgroundColor: "#0d2a57",
              color: "#7eaeff",

              borderColor: "#7eaeff",
              borderRadius: "3px",
              flex: "0 0 auto",
              fontSize: "1rem",
              lineHeight: "140%",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
            }}
            href="#link"
            className={`${navClass} blue_print_page_navbar_blueprint_icon`}
            onClick={() => {
              navigate(`/blueprint`);
            }}
          >
            BLUEPRINT
          </Nav.Link>
          <Nav.Link
            href="#link"
            className={`${navClass} blue_print_page_navbar_other_icons`}
            style={{
              backgroundColor: "#0d2a57",
              color: "#7eaeff",
              opacity: "0.35",
              borderColor: "#7eaeff",
              borderRadius: "3px",
              flex: "0 0 auto",
              fontSize: "1rem",
              lineHeight: "140%",
              fontWeight: 500,
              textDecoration: "none",
              textTransform: "uppercase",
              cursor: "no-drop",
            }}
            disabled
          >
            Garden
          </Nav.Link>

          {/* In Href Link you add links , here you will add twitter link  For Blue Page*/}
          <Nav.Link
          style={{ justifyContent: "center" , AlignItems: "center" , marginTop:"auto"}}
            href="#link"
            className={`${navClass} blue_print_page_navbar_other_icons`}
          >
            <FaTwitter /> {/* Thats is used for twitter link   For Blue Page*/}
          </Nav.Link>

          {/* In Href Link you add links , here you will add Instagram link  For Blue Page*/}
          <Nav.Link
          style={{ justifyContent: "center" , AlignItems: "center" , marginTop:"auto"}}
            href="#link"
            className={`${navClass} blue_print_page_navbar_other_icons`}
          >
            <FaInstagram />{" "}
            {/* Thats is used for Instagram link   For Blue Page*/}
          </Nav.Link>

          {/* In Href Link you add links , here you will add discord link  For Blue Page*/}
          <Nav.Link
          style={{ justifyContent: "center" , AlignItems: "center" , marginTop:"auto"}}
            
            href="#link"
            className={`${navClass} blue_print_page_navbar_other_icons`}
          >
            <FaDiscord /> {/* Thats is used for discord link   For Blue Page*/}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
