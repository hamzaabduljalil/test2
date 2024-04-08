import "./Footer.css";
import footer from "../imgs/footer.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="container">
          <div className="info">
            <Link to="/">
              <img src={footer} alt=""></img>
            </Link>
          </div>

          <div>
            <ul className="socail">
              <li>
                <a href="https://hamzaabduljalil.github.io/Hamza.por.github.io/">
                  Fb
                </a>
              </li>
              <li>
                <a href="">Lg</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-text">
          ©{date} <span>Royal Dom</span> | All Right Reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
