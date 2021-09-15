function DropdownItem(props) {
    return (
        <a
            href={props.href}
            className="menu-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            { props.leftIcon } { props.title }
        </a>
    );
}

export default DropdownItem;