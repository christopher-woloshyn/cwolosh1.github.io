import NavItem from "./NavItem";
import DropdownItem from "./DropdownItem";

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { ReactComponent as InstagramIcon } from './../icons/instagram-logo.svg';
import { ReactComponent as LinkedinIcon } from './../icons/linkedin-logo.svg';
import { ReactComponent as YoutubeIcon } from './../icons/youtube-logo.svg';
import { ReactComponent as GithubIcon } from './../icons/github-logo.svg';

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="name" to="/">CHRISTOPHER WOLOSHYN</Link>
            <ul className="navbar-nav">
                <NavItem title="Interests" to="/interests" />
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