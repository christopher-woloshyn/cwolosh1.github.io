import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <BottomNavigation >
            <BottomNavigationAction color="red" label="Facebook" value="recents" icon={
                <FacebookIcon style={{fill: "#3B5998"}}/>
            }/>
            <BottomNavigationAction label="Twitter" value="favorites" icon={
                <TwitterIcon style={{fill: "#1DA1F2"}}/>
            }/>
            <BottomNavigationAction label="Instagram" value="nearby" icon={
                <InstagramIcon style={{fill: "#C13584"}}/>
            }/>
            <BottomNavigationAction label="YouTube" value="folder" icon={
                <YouTubeIcon style={{fill: "#C4302B"}}/>
            }/>
        </BottomNavigation>
    )
}

export default Footer
