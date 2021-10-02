import SettingsIcon from "./../icons/settings-500.png";

const UnderContruction = (props) => {
    return (
        <div className="content-body">
            <h1>Thanks for your patience!</h1>
            <img
                src={SettingsIcon}
                alt="Icon of a gear rotating."
                className="gear-icon"
            />
            <h2 className="under-construction">
                The {props.page} page is still under construction,
                but it will be ready soon!
            </h2>
        </div>
    );
}
 
export default UnderContruction;