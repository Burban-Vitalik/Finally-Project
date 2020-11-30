import React from 'react';

import s from '../Content/Content.module.css';
// import getNews from '../../../../api'

export class Content extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         newList: []
    //     }

    //     let newList = getNews()
    //         .then(
    //             (res) => {
    //                 this.setState({newList: res.response})
    //                 console.log('Team list', this.state);
    //             }
    //         )
    //         .catch(
    //            (err) => console.error('err',err)
    //         );       
    // }
    render(){
        // console.log('Get News', getNews());
        return(
            <div className={s.content}>
                <h2>Latest News</h2>
            </div>
        )
    }
}