import DropdownItem from "./DropdownItem";

import { ReactComponent as InstagramIcon } from './../icons/instagram-logo.svg'
import { ReactComponent as LinkedinIcon } from './../icons/linkedin-logo.svg'
import { ReactComponent as YoutubeIcon } from './../icons/youtube-logo.svg'
import { ReactComponent as GithubIcon } from './../icons/github-logo.svg'

function DropdownMenu() {
    return (
        
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
    );
}

export default DropdownMenu;