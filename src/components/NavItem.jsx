import { useState, Fragment } from "react";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

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

    return (
        <Fragment>
            <CSSTransition in={hover} timeout={300} classNames="nav-item">
                <li
                    onMouseLeave={HandleMouseLeave}
                >
                    <Link 
                        className="icon-button"
                        to={props.to}
                        onMouseEnter={HandleMouseEnter}
                    >
                        { props.title }{ props.icon }
                    </Link>
                    { open && props.children }
                </li>
            </CSSTransition>
        </Fragment>
    );
}

export default NavItem;