import React from 'react';

import s from '../HomePage/HomePage.module.css';
import Sidebar from '../HomePage/Sidebar/Sidebar';
import { Content } from './Content/Content';
import Spiner from '../../General/Spiner/Spiner';

export class HomePage extends React.Component {
    render(){
        return(
            <div className={s.home}>
                <div className={s.flex}>
                    <Sidebar />
                    <Content />
                </div>
            </div>
        )
    }
}