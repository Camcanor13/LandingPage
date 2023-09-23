const ProjectItem = ({ title, description }) => {
  <div className={StyleSheet.Item}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>;
};

export default ProjectItem;
