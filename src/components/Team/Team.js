import "./Team.css";
import ceo from "../imgs/ceo.jpg";
import Shown from "./employeeList";
import OffcanvasExample from "../Header/Header";

const Team = (props) => {
  return (
    <>
      <OffcanvasExample></OffcanvasExample>
      <div className="container">
        <div className="title">
          <h2>The Team</h2>
          <p className="desc">
            WE ARE <span>DREAMERS</span>
          </p>
        </div>
        <div className="ceo ">
          <img src={ceo} alt="Ceo"></img>
          <div className="details">
            <h4>AHMAD ABDUL JALIL</h4>
            <p className="position">
              CEO <br />
              46 Years of Experience<br></br> Bachelor’s Degree in Civil
              Engineering (Sep 1977)
            </p>
            <div className="details-text">
              • Design and Execution of Construction Projects - Syria <br></br>•
              Bin Sweid Contracting Company - UAE<br></br>• Thurayaat General
              ContractingEstablishment - UAE<br></br>• Amana Company for Metal
              Constructions - UAE<br></br>• Royal Dome for Engineering
              Consultancy - UAE<br></br>
            </div>
          </div>
        </div>
        <Shown></Shown>
      </div>
    </>
  );
};
export default Team;
