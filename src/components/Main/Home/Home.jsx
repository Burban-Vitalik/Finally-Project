import React from 'react';

import s from '../Home/Home.module.css';
import Sidebar from '../Home/Sidebar/Sidebar';
import { Content } from './Content/Content';

export class Home extends React.Component {
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