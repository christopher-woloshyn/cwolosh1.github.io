import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";
import {ReactComponent as CaretIcon} from './../icons/caret.svg'

function Navbar() {
    return (
        <nav className="navbar">
                <ul className="navbar-nav">
                    <a className="name" href="#">CHRISTOPHER WOLOSHYN</a>
                    <NavItem icon="" title="Notes"/>
                    <NavItem icon="" title="About"/>
                    <NavItem icon={ <CaretIcon /> } title="Social Media">
                        <DropdownMenu />
                    </NavItem>
                </ul>
        </nav>
    );
}

export default Navbar;