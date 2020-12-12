import React from 'react';
import { NavLink } from 'react-router-dom';


import s from '../FooterMenu/FooterMenu.module.css';

export class FooterMenu extends React.Component {
    render(){
        return(
            <div className={s.footerMenu}>
                {/* <div className={s.logo}></div> */}
                <h1>Premie League</h1>
                <nav className={s.navigation}>
                    <NavLink to='/home' activeClassName={s.active}>Home</NavLink>
                    <NavLink to='/table' activeClassName={s.active}>Table</NavLink>
                    <NavLink to='/fixtures' activeClassName={s.active}>Fixtures</NavLink>
                    <NavLink to='/results' activeClassName={s.active}>Results</NavLink>
                    <NavLink to='/clubs' activeClassName={s.active}>Clubs</NavLink>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </nav>
            </div>
        )
    }
}