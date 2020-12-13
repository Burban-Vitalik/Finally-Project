import React from 'react';

import s from '../Content/Content.module.css';
import { NewsList } from '../../NewsPage/NewsList/NewsList';

export class Content extends React.Component {
    render(){
        return(
            <div className={s.content}>
                <section className={s.newsSection}>
                    <div className={s.listNews}>
                        <h2 className={s.h2}>Latest News</h2>
                        <NewsList />
                    </div> 
                </section>
            </div>
        )
    }
}