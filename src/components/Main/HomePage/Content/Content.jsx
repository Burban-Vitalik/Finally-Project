import React from 'react';

import s from '../Content/Content.module.css';
import { NewsList } from '../../NewsPage/NewsList/NewsList';
import { FixtureList } from '../../FixturePage/FixtureList/FixtureList';

export class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fromDate: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
            toDate: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
        }
    }
    getDateFixture = () => {
        let newDate = new Date();
        let year = newDate.getFullYear();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = newDate.getDay();
        let numberdate = newDate.getDate();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month = newDate.getMonth();
        return days[day] + " " + numberdate + " " + months[month] + " " + year; 
     }
    render(){
        return(
            <div className={s.content}>
                <section className={s.matchToday}>
                    <h2 className={s.h2}>{this.getDateFixture()}</h2>
                    <FixtureList fromDate={this.state.fromDate} toDate={this.state.toDate} fixtureSmall={true}/>
                </section>
                <section className={s.newsSection}>
                    <h2 className={s.h2}>Latest News</h2>
                    <div className={s.listNews}>
                        <NewsList />
                    </div>
                </section>
            </div>
        )
    }
}