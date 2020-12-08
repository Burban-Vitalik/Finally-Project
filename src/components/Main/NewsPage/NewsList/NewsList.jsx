import React from 'react';

import s from '../NewsList/NewsList.module.css';
import { getNews } from '../../../../api';
import { News } from './News/News';

export class NewsList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            newsList: []
        }

        getNews()
            .then(
                (res) => {
                    this.setState({newsList: res.arts})
                    console.log('res', res); 
                }
            )
            .catch(
               (err) => console.error('err',err)
            );  
        }    
    render(){
        // console.log('News List', this.state); 
        return(
            <div className={s.newsPage}>
                <div className={s.newsList}>
                    {this.state.newsList.map((elem, index) => {
                        return(
                            <News news={elem} key={index}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}