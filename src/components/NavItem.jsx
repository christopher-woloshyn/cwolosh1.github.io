import { useState, Fragment } from "react";
import { CSSTransition } from 'react-transition-group';

function NavItem(props) {

    const [open, setOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const HandleMouseEnter = () => {
        setHover(true);
        setOpen(true);
    }
    const HandleMouseLeave = () => {
        setHover(false);
        setTimeout(() => {setOpen(false)}, 300);
    }

    // TODO: Add dropdown animation when the dropdown menu is true.
    return (
        <Fragment>
            <CSSTransition in={hover} timeout={300} classNames="nav-item">
                <li
                    onMouseLeave={HandleMouseLeave}
                >
                    <a 
                        className="icon-button"
                        href="#"
                        onMouseEnter={HandleMouseEnter}
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