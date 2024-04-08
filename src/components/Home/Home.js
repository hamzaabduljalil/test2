import React, { useState, useEffect } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../imgs/logo2.png";
import logo2 from "../imgs/logo1.png";
import image1 from "../imgs/first bage slide show/image1.jpg";
import image2 from "../imgs/first bage slide show/image2.jpg";
import image3 from "../imgs/first bage slide show/image3.jpg";
import image4 from "../imgs/first bage slide show/image4.jpg";
import image5 from "../imgs/first bage slide show/image5.jpg";
import image6 from "../imgs/first bage slide show/image6.jpg";
import image7 from "../imgs/first bage slide show/image7.jpg";

const images = [image1, image5, image3, image2, image4, image6, image7];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(nextImage, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleRadioChange = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <>
      <div className="slider">
        {images.map((image, index) => (
          <>
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={index === currentImageIndex ? "active" : ""}
            />
            <span className="overlay"></span>
          </>
        ))}
        <div className="radio-buttons">
          {images.map((image, index) => (
            <label key={index}>
              <input
                className="input"
                type="radio"
                checked={index === currentImageIndex}
                onChange={() => handleRadioChange(index)}
              />
              <span />
            </label>
          ))}
        </div>
      </div>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          id="hea-der"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={logo}
                alt=""
                style={{ width: "100px", height: "50px" }}
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={logo2}
                    alt=""
                    style={{ width: "100px", height: "50px" }}
                  ></img>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="mob-ile">
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  id="header--link"
                >
                  <Nav.Link href="/">home</Nav.Link>
                  <Nav.Link href="/we-are">we are</Nav.Link>
                  <Nav.Link href="/Team">the team</Nav.Link>
                  <Nav.Link href="/projects">architectural </Nav.Link>
                  <Nav.Link href="/Contact">contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Home;
