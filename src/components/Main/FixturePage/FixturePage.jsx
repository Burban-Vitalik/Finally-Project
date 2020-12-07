import React from 'react';

import s from '../FixturePage/FixturePage.module.css';
import {getFutureFixtures} from '../../../api';
import {FixtureList} from './FixtureList/FixtureList';
import { FixtureMatch } from './FixtureList/FixtureMatch/FixtureMatch';

export class FixturePage extends React.Component{             
    render(){
        console.log('State',this.state);
        return(
            <div className={s.fixturePage}>
                <div className={s.header}>
                    <h1>Fixtures</h1>
                </div>
                <div className={s.container}>
                    <FixtureList />
                </div>
            </div>
        )
    }
}