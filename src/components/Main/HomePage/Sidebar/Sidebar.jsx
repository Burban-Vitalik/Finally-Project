import React from 'react';
import Table from '../../TablePage/Table/Table';

import s from '../Sidebar/Sidebar.module.css';

export default class Sidebar extends React.Component {
    render(){
        return(
            <aside className={s.sidebar}>
                <Table tableSmall={true}/>
            </aside>
        )
    }
}