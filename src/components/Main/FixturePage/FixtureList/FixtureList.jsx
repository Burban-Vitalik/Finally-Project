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

        let date = new Date();

        let today = `${date.getFullYear()}-${date.getMonth()+1}-0${date.getDate()}`;
        let toData = `${date.getFullYear()}-${date.getMonth()+2}-0${date.getDate()}`;

        getFutureFixtures(today, toData)
            .then(
                (res) => {
                    this.setState({fixturesList: res.response})
                }
            )
            .catch(
               (err) => console.error('err',err)
            );   
        }   
             
    render(){
        // console.log('State',this.state);
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