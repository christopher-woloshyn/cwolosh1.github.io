import { useState } from "react";

function NavItem(props) {

    const [open, setOpen] = useState(false);

    // TODO: Add dropdown animation when the dropdown menu is true.
    return (
            <li className="nav-item">
                <a className="icon-button" href="#" onClick={() => setOpen(!open)}>
                    { props.icon }{ props.title }
                </a>
                { open && props.children}  
            </li>
    );
}

export default NavItem;