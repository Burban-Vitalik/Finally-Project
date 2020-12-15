import React from 'react';

import s from '../FixtureList/FixtureList.module.css';
import {getFutureFixtures} from '../../../../api';
import { FixtureMatch } from './FixtureMatch/FixtureMatch';
import Spiner from '../../../General/Spiner/Spiner';


export class FixtureList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fixturesList: [],
            showSpiner: true,
        }

        let fromDate = this.props.fromDate;
        let toDate = this.props.toDate;
        getFutureFixtures(fromDate, toDate)
            .then(
                (res) => {
                    
                    let sortedList = res.response.sort((a,b) => new Date(a.fixture.date) - new Date(b.fixture.date));
                    this.setState({
                        fixturesList: sortedList,
                        showSpiner: false,
                    });
                    
                }
            )
            .catch(
               (err) => {
                   console.error('err',err)
                   this.setState({showSpiner: false})
               }
            );   
        } 
                       
    render(){
        return(
            <div className={s.fixturePage}>
                {(this.state.showSpiner) ? (<Spiner />) : ("")}
                <div className={s.fixturesList}>
                    {this.state.fixturesList.map((elem, index) => {
                        return(
                            <FixtureMatch match={elem} key={index} fixtureSmall={this.props.fixtureSmall}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}