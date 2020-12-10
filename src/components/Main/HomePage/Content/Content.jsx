import React from 'react';

import s from '../Content/Content.module.css';
import { NewsList } from '../../NewsPage/NewsList/NewsList';

export class Content extends React.Component {
    render(){
        return(
            <div className={s.content}>
                <section className={s.newsSection}>
                    <h2>Latest News</h2>
                    <div className={s.listNews}>
                        <NewsList maxWidth="25%" height="150px"/>
                    </div>
                    <button className={s.buttonMoreNews}>
                        More News    
                    </button>    
                </section>
            </div>
        )
    }
}