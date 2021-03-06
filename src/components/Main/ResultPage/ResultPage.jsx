import React from 'react';

import s from '../ResultPage/ResultPage.module.css';
import { FixtureList } from '../FixturePage/FixtureList/FixtureList';

export class ResultPage extends React.Component{
    constructor(){
        super();

        this.state={
            fromDate: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
            toDate: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
        }
    }          
    
    render(){
        return(
            <div className={s.ResultPage}>
                <div className={s.header}>
                    <h1>Results</h1>
                </div>
                <div className={s.container}>
                    <FixtureList fromDate={this.state.fromDate} toDate={this.state.toDate} fixture={false} resultMatch={true}/>
                </div>
            </div>
        )
    }
}