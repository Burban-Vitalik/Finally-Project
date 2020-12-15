import React from 'react';

import {getTeams} from '../../../api';
import s from '../TeamList/TeamList.module.css';

export class TeamList extends React.Component{
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
        return(
            <div className={s.clubList}>
                <div className={s.container}>
                    <p>League teams</p>
                    {/* {
                        this.state.teamList.map((elem,index) => {
                            return <img className={s.teamLogo} key={index} src={elem.team.logo} alt="Football Icon"/>
                        })
                    } */}
                </div>
            </div>
        )
    }
}