import React from 'react';

import s from '../ClubList/ClubList.module.css';
import {getTeams} from '../../../../api';

export class ClubList extends React.Component {
     constructor(props){
        super(props);

        this.state = {
            teamList: []
        }

        getTeams()
            .then(
                (res) => {
                    this.setState({teamList: res.response})
                }
            )
            .catch(
               (err) => console.error('err',err)
            );   
    }
    render(){
        console.log('constructor state list',this.state.teamList);    
        return(
            <div className={s.clubList}>
                {
                    this.state.teamList.map((elem,index) => {
                        return(
                            <div className={s.boxCard} key={index}>
                                <div className={s.stadium}>
                                    <span className={s.stadiumImg} style={{backgroundImage: `url(${elem.venue.image})`}}></span>
                                </div>
                                <div className={s.badge}>
                                    <span className={s.badgeContainer}>
                                        <img src={elem.team.logo} alt={elem.team.logo}/>
                                    </span>
                                </div>
                                <div className={s.info}>
                                    <div className={s.nameContainer}>
                                        <h4 className={s.clubName}>{elem.team.name}</h4>
                                        <p className={s.teamFounded}>Founded {elem.team.founded}</p>
                                        <div className={s.stadiumName}>{elem.venue.name}</div>
                                        <div className={s.stadiumCapacity}>Capacity {elem.venue.capacity}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}