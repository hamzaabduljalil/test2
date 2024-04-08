import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
const Final = (props) => {
  return (
    <div
      className={styles.projectOne}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <Link to={props.to} className={styles.hover}>
        {props.title}
      </Link>
    </div>
  );
};
export default Final;
