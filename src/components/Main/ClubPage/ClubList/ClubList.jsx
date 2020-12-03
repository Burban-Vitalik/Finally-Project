import React from 'react';

import s from '../ClubList/ClubList.module.css';
import getTeams from '../../../../api';

export class ClubList extends React.Component {
     constructor(props){
        super(props);

        this.state = {
            teamList: []
        }

        let teamList = getTeams()
            .then(
                (res) => {
                    this.setState({teamList: res.response})
                }
            )
            .catch(
               (err) => console.error('err',err)
            );   
            // console.log('constructor state list',this.state.teamList);    
    }

    render(){
        console.log('constructor state list',this.state.teamList);    
        return(
            <div className={s.clubList}>
                {
                    this.state.teamList.map((elem,index) => {
                        return(
                            <div className={s.boxCard} key={index}>
                                <div className={s.cardTop}>
                                    <img src={elem.venue.image} alt={elem.venue.name}/>
                                </div>

                                <div className={s.logo}>
                                    <img src={elem.team.logo} alt={elem.team.name}/>
                                </div>
                                
                                <div className={s.cardBottom}>
                                    <p className={s.clubName}>{elem.team.name}</p>
                                </div>
                             </div>
                        )
                    })
                    }
            </div>
        )
    }
}