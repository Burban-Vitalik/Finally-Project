import React from 'react';

import s from '../TablePage/TablePage.module.css';
import Table from '../TablePage/Table/Table';

export class TablePage extends React.Component{
    
    render(){
        return(
            <div className={s.tablePage}>
                <Table />
            </div>
        )
    }
}