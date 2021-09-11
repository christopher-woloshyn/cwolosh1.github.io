import NavItem from "./NavItem";
import DropdownItem from "./DropdownItem";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { ReactComponent as InstagramIcon } from './../icons/instagram-logo.svg';
import { ReactComponent as LinkedinIcon } from './../icons/linkedin-logo.svg';
import { ReactComponent as YoutubeIcon } from './../icons/youtube-logo.svg';
import { ReactComponent as GithubIcon } from './../icons/github-logo.svg';

import ApartmentIcon from '@material-ui/icons/Apartment';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
// import { ReactComponent as BuildingIcon } from './../icons/building-icon.svg';
// import { ReactComponent as DumbbellIcon } from './../icons/dumbbell-icon.svg';
import { ReactComponent as PaintbrushIcon } from './../icons/paintbrush-icon.svg';
import { ReactComponent as D20Icon } from './../icons/d20-icon.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <a className="name" href="#">CHRISTOPHER WOLOSHYN</a>
            <ul className="navbar-nav">
                <NavItem title="About" />
                <NavItem icon={ <ArrowDropDownIcon /> } title="Interests">
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
                </NavItem>
                <NavItem icon="" title="Projects"/>
                <NavItem icon={ <ArrowDropDownIcon /> } title="Connect">
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