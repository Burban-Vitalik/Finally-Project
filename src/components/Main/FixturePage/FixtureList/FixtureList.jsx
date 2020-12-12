import React from 'react';

import s from '../FixtureList/FixtureList.module.css';
import {getFutureFixtures} from '../../../../api';
import { FixtureMatch } from './FixtureMatch/FixtureMatch';

export class FixtureList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fixturesList: []
        }

        let fromDate = this.props.fromDate;
        let toDate = this.props.toDate;
        getFutureFixtures(fromDate, toDate)
            .then(
                (res) => {
                    
                    let sortedList = res.response.sort((a,b) => new Date(a.fixture.date) - new Date(b.fixture.date));
                    this.setState({fixturesList: sortedList});
                    console.log(this.state);
                }
            )
            .catch(
               (err) => console.error('err',err)
            );   
        } 
                       
    render(){
        return(
            <div className={s.fixturePage}>
                <div className={s.fixturesList}>
                    {this.state.fixturesList.map((elem, index) => {
                        return(
                            <FixtureMatch match={elem} key={index}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}