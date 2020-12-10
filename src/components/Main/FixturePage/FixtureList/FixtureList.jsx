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
                    this.setState({fixturesList: res.response})
                }
            )
            .catch(
               (err) => console.error('err',err)
            );   

            console.log('Props', this.state);
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