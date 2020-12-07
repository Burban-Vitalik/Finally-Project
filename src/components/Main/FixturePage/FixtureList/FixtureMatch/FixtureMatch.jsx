import React from 'react';

import s from '../FixtureMatch/FixtureMatch.module.css';
import {getFutureFixtures} from '../../../../../api';
const stadiumIcon = require('../../../../../Img/stadiumIcon.png');



export class FixtureMatch extends React.Component{
     constructor(props){
         super(props);
        //  console.log('Props', this.props);
     }

     getTimestamp = (timestamp) => {
        let matchTimestamp = timestamp
        let date = new Date(matchTimestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        
        return hours + ':' + minutes.substr(-2);        
     }

    render(){
        return(
            <div className={s.fixtureMatch}>
                <div className={s.overview}>
                    {/* Minutes */}
                    <div className={s.minutes}>
                    <p>{this.props.match.fixture.status.elapsed}</p>
                    </div>
                    {/* Teams */}
                    <div className={s.teams}>
                        <div className={`${s.team} ${s.teamHome}`}>
                            <div className={s.teamName}>
                                <p>{this.props.match.teams.home.name}</p>
                            </div>
                            <div className={s.badgeContainer}>
                                <img src={this.props.match.teams.home.logo}/>
                            </div>
                        </div>
                        <time className={s.matchTime} dateTime='2020-12-06-20:35'>{this.getTimestamp(this.props.match.fixture.timestamp)}</time>
                        <div className={`${s.team} ${s.teamAway}`}>
                            <div className={s.badgeContainer}>
                            <img src={this.props.match.teams.away.logo}/>
                            </div>
                            <div className={s.teamName}>
                                <p>{this.props.match.teams.away.name}</p>
                            </div>
                        </div>
                    </div>
                    {/* Stadium */}
                    <div className={s.stadiumName}>
                        <div className={s.stadiumIcon}>
                            
                        </div>
                        <p>{this.props.match.fixture.venue.name},{this.props.match.fixture.venue.city}</p>
                    </div>
                </div>
            </div>
        )
    }
}