import NavItem from "./NavItem";
import DropdownItem from "./DropdownItem";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { ReactComponent as InstagramIcon } from './../icons/instagram-logo.svg';
import { ReactComponent as LinkedinIcon } from './../icons/linkedin-logo.svg';
import { ReactComponent as YoutubeIcon } from './../icons/youtube-logo.svg';
import { ReactComponent as GithubIcon } from './../icons/github-logo.svg';

// import ApartmentIcon from '@material-ui/icons/Apartment';
// import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import { ReactComponent as PaintbrushIcon } from './../icons/paintbrush-icon.svg';
// import { ReactComponent as D20Icon } from './../icons/d20-icon.svg';

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="name" to="/">CHRISTOPHER WOLOSHYN</Link>
            <ul className="navbar-nav">
                <NavItem title="About" to="/about" />
                <NavItem title="Interests" to="/interests" />
                {/* <NavItem icon={ <ArrowDropDownIcon /> } title="Interests" to="#">
                    <div className="dropdown">
                        <DropdownItem
                                    leftIcon={<ApartmentIcon />}
                                    href="#"
                                    title="Urban Planning"
                            />
                            <DropdownItem
                                    leftIcon={<FitnessCenterIcon />}
                                    href="#"
                                    title="Fitness"
                            />
                            <DropdownItem
                                    leftIcon={<PaintbrushIcon />}
                                    href="#"
                                    title="Painting"
                            />
                            <DropdownItem
                                    leftIcon={<D20Icon />}
                                    href="#"
                                    title="DnD"
                            />
                    </div>
                </NavItem> */}
                <NavItem icon="" title="Projects" to="/projects" />
                <NavItem icon={ <ArrowDropDownIcon /> } title="Connect" to="#">
                    <div className="dropdown">
                        <DropdownItem
                            leftIcon={<LinkedinIcon />}
                            href="https://www.linkedin.com/in/cwolosh1/"
                            title="LinkedIn"
                        />
                        <DropdownItem
                            leftIcon={<GithubIcon />}
                            href="https://github.com/cwolosh1"
                            title="GitHub"
                        />
                        <DropdownItem
                            leftIcon={<InstagramIcon />}
                            href="https://www.instagram.com/cwolosh1/"
                            title="Instagram"
                        />
                        <DropdownItem
                            leftIcon={<YoutubeIcon />}
                            href="https://www.youtube.com/channel/UCZUxdRNLYnvBMx6sGYnhkfw"
                            title="YouTube"
                        />
                    </div>
                </NavItem>
            </ul>
        </nav>
    );
}

export default Navbar;