import React from 'react';

import s from '../News/News.module.css';
import Button from '@material-ui/core/Button';

export class News extends React.Component {
    constructor(props){
        super(props);
        console.log('Props', this.props);
    }

    getTime = (publishedTime) => {
        let matchTimestamp = publishedTime
        let fullDate = new Date(matchTimestamp * 1000);
        let year = fullDate.getFullYear();
        let month = fullDate.getMonth()+1;
        let date = fullDate.getDate();
        
        return year + ':' + month + ':' + date;        
     }
    
    render(){
        return(
            <article className={s.news}>
                <div className={s.img}>
                    <img src={this.props.news.img}  alt="Photo"/>
                </div>
                <div className={s.title}>
                    <p>{this.props.news.tit}</p>
                </div>
                <div className={s.description}>
                    <p>{this.props.news.des}</p>
                </div>
                <div className={s.published}>
                    <p>{this.props.news.aut}</p>
                    <time>{this.getTime(this.props.news.pub)}</time>
                </div>
            </article>
        )
    }
}