import React from 'react';

import s from '../FixtureMatch/FixtureMatch.module.css';
import {getFutureFixtures} from '../../../../../api';
import LiveTvIcon from '@material-ui/icons/LiveTv';


export class FixtureMatch extends React.Component{
     constructor(props){
         super(props);
         console.log('Props', this.props);
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
                    {(this.props.match.fixture.status.short === "NS" || this.props.match.fixture.status.short === "FT" || this.props.match.fixture.status.short === "PST") ? (
                        ""
                    ) : (
                        <p className={s.pLive}><LiveTvIcon fontSize='small' className={s.cameraIcon}/>{this.props.match.fixture.status.elapsed}</p>
                    )
                        }
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
                        {(this.props.match.fixture.status.short === "NS") ? (
                            <time className={s.matchTime} dateTime={this.getTimestamp(this.props.match.fixture.timestamp)}>{this.getTimestamp(this.props.match.fixture.timestamp)}</time>
                        ): (
                            <div className={s.tablo}>
                                <div className={s.homeGoals}>{this.props.match.goals.home}</div>
                                <div className={s.awayGoals}>{this.props.match.goals.away}</div>
                            </div>
                        )}
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