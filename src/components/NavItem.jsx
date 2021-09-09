import { useState, Fragment } from "react";
import { CSSTransition } from 'react-transition-group';

function NavItem(props) {

    const [open, setOpen] = useState(false);

    // TODO: Add dropdown animation when the dropdown menu is true.
    return (
        <Fragment>
            <CSSTransition in={open} classNames="nav-item">
                <li
                    onMouseLeave={() => setOpen(false)}
                >
                    <a 
                        className="icon-button"
                        href="#"
                        onMouseEnter={() => setOpen(true)}
                    >
                        { props.title }{ props.icon }
                    </a>
                    { open && props.children }
                </li>
            </CSSTransition>
        </Fragment>
    );
}

export default NavItem;