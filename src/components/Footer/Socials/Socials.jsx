import React from 'react';

import s from '../Socials/Socials.module.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

export class Socials extends React.Component {
    render(){
        return(
            <nav className={s.navigation}>
                <h2>Socials</h2>
                <ul className={s.listSocials}>
                    <a href="https://www.youtube.com/premierleague" rel="noreferrer" target="_blank"><YouTubeIcon className={s.youtubeIcon} /> PL on YouTube</a>
                    <a href="https://www.facebook.com/premierleague" rel="noreferrer" target="_blank"><FacebookIcon className={s.facebookIcon} /> PL on Facebook</a>
                    <a href="https://www.facebook.com/OfficialFPL/" rel="noreferrer" target="_blank"><FacebookIcon className={s.facebookIcon} /> FPL on Facebook</a>
                    <a href="https://twitter.com/premierleague" rel="noreferrer" target="_blank"><TwitterIcon className={s.twitterIcon} /> PL on Twitter</a>
                    <a href="https://twitter.com/OfficialFPL" rel="noreferrer" target="_blank"><TwitterIcon className={s.twitterIcon} /> FPL on Twitter</a>
                    <a href="https://twitter.com/PLCommunities" rel="noreferrer" target="_blank"><TwitterIcon className={s.twitterIcon} /> PL Communities on Twitter</a>
                    <a href="https://twitter.com/PLYouth" rel="noreferrer" target="_blank"><TwitterIcon className={s.twitterIcon} /> PL Youth on Twitter </a>
                    <a href="https://www.instagram.com/premierleague" rel="noreferrer" target="_blank"><InstagramIcon className={s.instagramIcon} /> PL on Instagram</a>
                    <a href="https://twitter.com/PLinUSA" rel="noreferrer" target="_blank"><TwitterIcon className={s.twitterIcon} /> PL USA on Twitter</a>
                    <a href="https://www.instagram.com/plinusa/" rel="noreferrer" target="_blank"><InstagramIcon className={s.instagramIcon} /> PL USA on Instagram</a>
                    <a href="https://open.spotify.com/user/plplaylists" rel="noreferrer" target="_blank"><PlayCircleFilledIcon className={s.spotifyIcon} /> PL Music on Spotify</a>
                </ul>
            </nav>
        )
    }
}