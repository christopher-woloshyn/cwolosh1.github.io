function DropdownItem(props) {
    return (
        <a href={props.href} className="menu-button">
            { props.leftIcon } { props.title }
        </a>
    );
}

export default DropdownItem;