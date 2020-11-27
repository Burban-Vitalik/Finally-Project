import React from 'react';
import { NavLink } from 'react-router-dom';

import s from '../Menu/Menu.module.css';

export class Menu extends React.Component {
    
    render(){
        return(
            <div className={s.menu}>
                <div className={s.parentLogo}>
                    <img src='https://cdn.freelogovectors.net/wp-content/uploads/2020/08/epl-premierleague-logo.png' alt='Logo' className={s.logo}/>
                    <p>Premier Legue</p>
                </div>
                <nav className={s.navigation}>
                    <ul className={s.nav}>
                        <li className={s.item}>
                            <NavLink to='/Home' activeClassName={s.active}>Home</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink to='/Tables' activeClassName={s.active}>Table</NavLink>
                        </li>
                        <li className={s.item}>
                            <NavLink to='/Events' activeClassName={s.active}>Events</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}