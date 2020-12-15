import React from 'react';

import s from '../TodayMatches/TodayMatches.module.css';
import {getFutureFixtures} from '../../../api';
import LiveTvIcon from '@material-ui/icons/LiveTv';


export class TodayMatches extends React.Component {
    constructor(state){
        super(state);

        this.state = {
            fixturesList: [],
        }

        let fromDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
        let toDate =  `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;

        getFutureFixtures(fromDate, toDate)
            .then(
                (res) => {
                    let sortedList = res.response.sort((a,b) => new Date(a.fixture.date) - new Date(b.fixture.date));
                    this.setState({
                        fixturesList: sortedList,
                    });
                }
            )
            .catch(
               (err) => {
                   console.error('err',err)
               }
            );   
    }

    getTimestamp = (timestamp) => {
        let matchTimestamp = timestamp
        let date = new Date(matchTimestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        return hours + ':' + minutes.substr(-2);        
     }

    

    render(){
        console.log('ELLLEWLLE',this.state.fixturesList);
        return(
            <div className={s.todayMatches}>
                <div className={s.matchesList}>
                    {this.state.fixturesList.map((elem, index) => {
                        return(
                            <div className={s.todayMatch}>
                                <div className={s.overview}>
                                    <div className={s.minutes}>
                                        {(this.state.match.fixture.status.short === "NS" || this.state.match.fixture.status.short === "FT" || this.state.match.fixture.status.short === "PST") ? (
                                            (this.state.match.fixture.status.short === "FT") ? (
                                                <p>Finished</p>
                                            ) : (
                                            ''
                                                )
                                            ) : (
                                            <p className={s.pLive}><LiveTvIcon fontSize='small' className={s.cameraIcon}/>Live {this.state.match.fixture.status.elapsed}</p>
                                        )}
                                    </div>
                                    <div className={s.teams}>
                                        <div className={`${s.team} ${s.teamHome}`}>
                                            <div className={s.teamName}>
                                                <p>{this.state.match.teams.home.name}</p>
                                            </div>
                                            <div className={s.badgeContainer}>
                                                <img src={this.state.match.teams.home.logo}/>
                                            </div>
                                        </div>
                                        {(this.state.match.fixture.status.short === "NS") ? (
                                            <time className={s.matchTime} dateTime={this.getTimestamp(this.state.match.fixture.timestamp)}>{this.getTimestamp(this.state.match.fixture.timestamp)}</time>
                                        ): (
                                            <div className={s.tablo}>
                                                <div className={s.homeGoals}>{this.state.match.goals.home}</div>
                                                <div className={s.awayGoals}>{this.state.match.goals.away}</div>
                                            </div>
                                        )}
                                        <div className={`${s.team} ${s.teamAway}`}>
                                            <div className={s.badgeContainer}>
                                            <img src={this.state.match.teams.away.logo}/>
                                            </div>
                                            <div className={s.teamName}>
                                                <p>{this.state.match.teams.away.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
