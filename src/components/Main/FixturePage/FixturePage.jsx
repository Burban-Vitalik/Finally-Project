import React from 'react';

import s from '../FixturePage/FixturePage.module.css';
import {getFutureFixtures} from '../../../api';
import {FixtureList} from './FixtureList/FixtureList';
import { FixtureMatch } from './FixtureList/FixtureMatch/FixtureMatch';

export class FixturePage extends React.Component{
    constructor(){
        super();

        this.state={
            fromDate: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
            toDate: `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate()}`,
        }
    }          
    render(){
        return(
            <div className={s.fixturePage}>
                <div className={s.header}>
                    <h1>Fixtures</h1>
                </div>
                <div className={s.container}>
                    <FixtureList fromDate={this.state.fromDate} toDate={this.state.toDate}/>
                </div>
            </div>
        )
    }
}