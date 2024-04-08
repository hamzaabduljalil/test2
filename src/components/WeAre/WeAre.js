import { Outlet } from "react-router-dom";
import styles from "./WeAre.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../imgs/logo2.png";
import logo2 from "../imgs/logo1.png";
import OffcanvasExample from "../Header/Header";
const WeAre = () => {
  return (
    <>
      <div className={styles.photo}></div>
      <Outlet></Outlet>
      <div className="container">
        <div className={styles.textBlock}>
          <div className={styles.title}>
            <h2>WE ARE DREAMERS</h2>
          </div>
          <div className={styles.block}>
            <p className={styles.header}>Infinitum is not the limit…</p>
            <p className={styles.text}>
              Royal Dome Engineering Consultancy is a company founded and based
              in Abu Dhabi and Al Ain since 2016. We specialize in offering
              integrated design and engineering services in the fields of
              architecture, engineering, interior design, and project
              management. We take great pride in our accomplishment of receiving
              the first-class classification license category awarded by the Abu
              Dhabi Municipality.
              <br></br>
              <br></br>
              Ahmad Abdul Jalil, Mohamed Sayed, and Muhanad Abdul Jalil are
              leading an interdisciplinary team of international architects,
              designers, and engineers creating and realizing sustainable and
              holistic concepts for residential, commercial, and cultural
              projects.
              <br></br>
              <br></br>
              During the design process, projects are conceptualized in clear,
              highly visual 3D-model supported presentations using a
              state-of-the-art computer- aided design process. This method
              allows for swift and precise progress, achieving design objectives
              that can be verified and tested against the clients’ expectations.
              The office has developed advanced skills in all architectural,
              interior design, and engineering work stages.
              <br></br>
              <br></br>
              Architectural design and detail development are thoroughly
              coordinated and constantly fine-tuned with structural, mechanical,
              and electricalengineering.
              <br></br>
              During the tendering process, contract administration, and site
              supervision, our dedicated team ensures that projects are
              completed to the highest quality standards.
            </p>
          </div>
        </div>
        <div className={styles.textBlock}>
          <div className={styles.title}>
            <h2>WHAT WE DO</h2>
          </div>
          <div className={styles.block}>
            <p className={styles.header}>Architecture</p>
            <p className={styles.text}>
              From well-organized space plans to breathtaking façades, our team
              of highly talented architects has designed a wide range of
              developments in the region. With their diverse professional
              backgrounds, our concept team will transform your requirements
              into space-efficient floor plans and 3D models that are sure to
              make an impression. Our capable Design Development team will then
              refine these drawings, incorporating MEP systems and Structural
              Design, to provide you with comprehensive, ready-to-build
              architectural drawings.
            </p>
            <p className={styles.header}>Concept creation</p>
            <p className={styles.text}>
              Our company thrives on the art of concept creation. With a team of
              talented and creative minds, we generate unique ideas and
              transform them into tangible concepts. Through our meticulous
              process, we deliver innovative solutions that exceed expectations.
              From initial brainstorming to final implementation, our concept
              creation expertise sets us apart, ensuring visionary and impactful
              outcomes for our clients.
            </p>
            <p className={styles.header}>Structures</p>
            <p className={styles.text}>
              Our experienced structural engineers will study, analyze, and
              advise you on which structural systems to use. They will design
              the structure of the project starting from the enabling works all
              the way to the superstructures. They will work with the concept
              architects and design development architects to ensure that the
              most effective structural design is implemented
            </p>
            <p className={styles.header}>Supervision</p>
            <p className={styles.text}>
              Once the design is completed and approved, we move forward to
              construction. Our team of Quantity surveyors will help you with
              choosing the optimal materials and finishes in terms of quality
              and cost-effectiveness. On-site, our experienced Project Managers
              will be present along with the contractors at all times throughout
              the construction period to make sure that the designs are carried
              out as planned.
            </p>
          </div>
        </div>
        <div className={styles.textBlock}>
          <div className={styles.title}>
            <h2>
              OUR GOALS<br></br>AND ACHIEVEMENTS
            </h2>
          </div>
          <div className={styles.block}>
            <p className={styles.header}>Our Vision</p>
            <p className={styles.text}>
              Our vision is to provide diverse engineering consulting services,
              with the challenge of developing and equipping our engineering
              staff with local and international expertise to achieve
              competitive confidence according to professional standards and
              ethics. We aim to contribute to elevating the engineering
              profession in the United Arab Emirates.
            </p>
            <p className={styles.header}>Our Mission</p>
            <p className={styles.text}>
              We strive to deliver the best services in various fields of
              engineering consulting with high professional efficiency, ensuring
              customer satisfaction by providing them with the best possible
              options to meet their desires while reducing the overall cost of
              their projects.
            </p>
            <p className={styles.header}>Our Objectives</p>
            <p className={styles.text}>
              Our objectives include designing outstanding projects at high
              levels of quality, reducing execution costs, ensuring speedy
              completion, and achieving an efficient and sustainable
              environment. We aim to provide consulting and technical services
              at the highest level, relying on the best human resources and
              keeping up with the latest advancements in the field. Furthermore,
              we aspire to become one of the leading consulting firms and
              expertise houses in the United Arab Emirates
            </p>
            <p className={styles.header}>Our Expertise</p>
            <p className={styles.text}>
              The engineers at Royal Dome possess a high level of experience and
              competence in various specialties. Their performance is based on
              credibility, quality, and responsibility, qualifying them to
              deliver the highest standards in every project phase. In addition,
              they have experience in dealing with contractors, suppliers, and
              other companies, enabling them to manage project budgets and
              schedules effectively while achieving the desired quality. Royal
              Dome’s engineers specialize in providing architectural and
              engineering design services throughout all stages of a project.
              This includes developing architectural ideas, studying spatial
              analysis, interior design, and preparing engineering plans for
              construction, electrical, and plumbing works. They also provide
              architectural renderings for floor plans, facades, sections, and
              perspectives, along with quantity schedules, technical
              specifications, and more.
            </p>
          </div>
        </div>
      </div>

      {/* ******************** */}
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
export default WeAre;
