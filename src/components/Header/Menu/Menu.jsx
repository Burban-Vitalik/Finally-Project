import React from 'react';
import { NavLink } from 'react-router-dom';

import s from '../Menu/Menu.module.css';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EventNoteIcon from '@material-ui/icons/EventNote';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export class Menu extends React.Component {
    
    render(){
        return(
            <div className={s.menu}>
                <div className={s.parentLogo}>
                    <NavLink to="/Home">
                        <img src='https://cdn.freelogovectors.net/wp-content/uploads/2020/08/epl-premierleague-logo.png' alt='Logo' className={s.logo}/>
                    </NavLink>
                    <NavLink to="/Home">
                        <p>Premier Legue</p>                    
                    </NavLink>
                </div>
                <nav className={s.navigation}>
                    <ul className={s.nav}>
                        <li className={s.item}>
                            <NavLink to='/Home' activeClassName={s.active}><HomeIcon color="disabled"/>Home</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink to='/Tables' activeClassName={s.active}><ListAltIcon />Table</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink to='/Events' activeClassName={s.active}><EventNoteIcon />Events</NavLink>
                        </li>
                    </ul>
                    <ul className={s.socials}>
                        <li className={s.socialItem}>
                            <a href="https://www.youtube.com/premierleague" target="_blank" title="Click me"><YouTubeIcon className={s.youtubeIcon}/>PL on YouTube</a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://www.facebook.com/premierleague" target="_blank" title="Click me"><FacebookIcon className={s.facebookIcon}/>PL on Facebook</a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://twitter.com/premierleague" target="_blank" title="Click me"><TwitterIcon className={s.twitterIcon}/>PL on Twitter</a>
                        </li>
                        <li className={s.socialItem}>
                            <a href="https://www.instagram.com/premierleague/" target="_blank" title="Click me"><InstagramIcon className={s.instagramIcon}/>PL on Instagram</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}