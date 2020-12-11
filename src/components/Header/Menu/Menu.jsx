import React from 'react';
import { NavLink } from 'react-router-dom';

import s from '../Menu/Menu.module.css';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MenuIcon from '@material-ui/icons/Menu';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import PublicIcon from '@material-ui/icons/Public';

export class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            mobileMenu: false,
        };
    }

    toggleMobileMenu = () => {
        this.setState({
            mobileMenu: !this.state.mobileMenu
        })
    }

    getNavigation = () => {
        return (
            <nav className={s.navigation}>
                <NavLink to='/home' activeClassName={s.active}><HomeIcon/>Home</NavLink>
                <NavLink to='/table' activeClassName={s.active}><ListAltIcon />Table</NavLink>
                <NavLink to='/fixtures' activeClassName={s.active}><EventNoteIcon />Fixtures</NavLink>
                <NavLink to='/results' activeClassName={s.active}><EventNoteIcon />Results</NavLink>
                <NavLink to='/clubs' activeClassName={s.active}><SportsSoccerIcon />Clubs</NavLink>
                <NavLink to='/news' activeClassName={s.active}><PublicIcon />News</NavLink>
            </nav>
        );
    }

    render(){
        return(
            <div className={s.headerMenu}>
                <div className={s.menu}>
                    <NavLink to="/home" className={s.parentLogo}>
                        <img src='https://cdn.freelogovectors.net/wp-content/uploads/2020/08/epl-premierleague-logo.png' alt='Logo' className={s.logo}/>
                        <p>Premier Legue</p>                    
                    </NavLink>

                    {this.getNavigation()}
                    
                    <Button className={`${s.menuBtn} ${(this.state.mobileMenu) ? s.active : ""}`} variant="contained" onClick={this.toggleMobileMenu}>
                        {(this.state.mobileMenu) ? <CloseIcon /> : <MenuIcon />}  
                    </Button> 
                </div>
                
                <div className={`${s.mobileMenu} ${(this.state.mobileMenu) ? s.show : ""}`}>
                    {this.getNavigation()}
                </div>
            </div> 
        )
    }
}