import React from 'react';

import s from '../Content/Content.module.css';

export class Content extends React.Component {

    render(){
        return(
            <div className={s.content}>
                <h2>Latest News</h2>
            </div>
        )
    }
}