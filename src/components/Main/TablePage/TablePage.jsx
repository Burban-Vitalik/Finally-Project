import React from 'react';

import s from '../TablePage/TablePage.module.css';
import Table from '../TablePage/Table/Table';
import SelectSeason from './SelectSeason/SelectSeason';

export class TablePage extends React.Component{
    
    render(){
        return(
            <div className={s.tablePage}>
                <div className={s.header}>
                    <h1>Tables</h1>
                </div>
                <div className={s.container}>
                    <SelectSeason />
                </div>
                <Table />
            </div>
        )
    }
}