import styles from "./Projects.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Outlet } from "react-router-dom";
import logo from "../imgs/logo2.png";
import logo2 from "../imgs/logo1.png";
import ProjectList from "./ProjectList";
const Projects = (props) => {
  return (
    <>
      <Outlet></Outlet>
      <div className={styles.photo}>
        <div className={styles.title}>
          <h1>Architectural Design</h1>
          <p>
            <span>INFINITUM </span>
            IS NOT OUR LIMIT
          </p>
        </div>
      </div>
      <ProjectList></ProjectList>

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
            <Navbar.Toggle
              className="but"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
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
export default Projects;
