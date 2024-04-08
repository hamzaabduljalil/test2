import dataProject from "./dataProject";
import Final from "./final";

const ProjectList = () => {
  const show = dataProject.map((el, id) => (
    <Final key={id} title={el.title} img={el.img} to={el.to} />
  ));
  return <div>{show}</div>;
};
export default ProjectList;
