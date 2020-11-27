import React from 'react';

import s from '../Header/Header.module.css'
import { Menu } from './Menu/Menu';
import { TeamList } from './TeamList/TeamList';

export class Header extends React.Component{
    
    render(){
        return(
            <div className={s.header}>
                <TeamList />
                <Menu />
            </div>
        )
    }
}