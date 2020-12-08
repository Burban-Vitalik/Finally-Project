import React from 'react';

import s from '../NewsPage/NewsPage.module.css';
import { NewsList } from './NewsList/NewsList';

export class NewsPage extends React.Component {
    render(){
        return(
            <div className={s.newsPage}>
                <div className={s.header}>
                    <h1>World football news</h1>
                </div>
                <div className={s.container}>
                    <NewsList />  
                </div>
            </div>
        )
    }
}