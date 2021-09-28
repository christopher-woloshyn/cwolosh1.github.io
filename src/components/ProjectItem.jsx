const ProjectItem = (props) => {

    return (
        <div className="content-wrapper">
            <h2>{props.title}</h2>
            {
            props.icon &&
            <div className="project-image-container">
                <img
                    src={props.icon}
                    alt={`Icon from the ${props.title} project.`}
                />
            </div>
            }
            {
            props.href && 
            <div className="button-container">
                <a 
                    className="projects-button"
                    target="_blank"
                    rel="noreferrer"
                    href={props.href}
                >
                    {props.buttonName}
                </a>
            </div>
            }
            {props.children}
        </div>
    );
}
 
export default ProjectItem;