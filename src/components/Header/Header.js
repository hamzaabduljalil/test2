import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../imgs/logo1.png";
function OffcanvasExample() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          id="header"
        >
          <Container fluid>
            <Navbar.Brand href="/">
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
                    src={logo}
                    alt=""
                    style={{ width: "100px", height: "50px" }}
                  ></img>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="mobile">
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  id="header-link"
                >
                  <NavLink activeClassName="active" to="/">
                    home
                  </NavLink>
                  <NavLink activeClassName="active" to="/we-are">
                    we are
                  </NavLink>
                  <NavLink activeClassName="active" to="/Team">
                    the team
                  </NavLink>
                  <NavLink activeClassName="active" to="/projects">
                    architectural
                  </NavLink>
                  <NavLink activeClassName="active" to="/Contact">
                    contact
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
