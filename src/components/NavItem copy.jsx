import { useState } from "react";
import { CSSTransition } from 'react-transition-group';

function NavItem(props) {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    // TODO: Add dropdown animation when the dropdown menu is true.
    return (
        <li
            className="nav-item"
            onMouseLeave={() => setHover(!hover)}
        >
            <a 
                className="icon-button"
                href="#"
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setHover(true)}
            >
                { props.title }{ props.icon }
            </a>
            { hover && props.children }
        </li>
    );
}

export default NavItem;