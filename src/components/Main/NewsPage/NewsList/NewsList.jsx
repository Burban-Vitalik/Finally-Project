import React from 'react';

import s from '../NewsList/NewsList.module.css';
import { getNews } from '../../../../api';
import { News } from './News/News';
import Spiner from '../../../General/Spiner/Spiner';

export class NewsList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            newsList: [],
            showSpiner: true,
        }

        getNews()
            .then(
                (res) => {       
                    this.setState({
                        newsList: res.arts,
                        showSpiner: false,
                    })
                    console.log('Response',res);
                }
            )
            .catch(
               (err) => {
                    console.error('err',err)
                    this.setState({showSpiner: false});
               }               
            );  
        }  
    render(){
        return(
            <div className={s.newsPage}>
                {(this.state.showSpiner) ? (<Spiner />) : ("")}
                <div className={s.newsList} style={{justifyContent: `${this.props.content}`}}>
                    {this.state.newsList.map((elem, index) => {
                        return(
                            <News news={elem} key={index} maxWidth={this.props.maxWidth} height={this.props.height}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}