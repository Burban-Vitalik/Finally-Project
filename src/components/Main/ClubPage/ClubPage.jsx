import React from 'react';

import s from '../ClubPage/ClubPage.module.css';
import { ClubList } from './ClubList/ClubList';

export class ClubPage extends React.Component {
    render(){
        return(
            <div className={s.clubPage}>
                <div className={s.header}>
                    <h1>Clubs</h1>
                </div>
                <ClubList />
            </div>
        )
    }
}