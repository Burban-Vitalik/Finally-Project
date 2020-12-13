import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import { Header } from './components/Header/Header';
import { ClubPage } from './components/Main/ClubPage/ClubPage';
import { FixturePage } from './components/Main/FixturePage/FixturePage';
import { HomePage } from './components/Main/HomePage/HomePage';
import { TablePage } from './components/Main/TablePage/TablePage';
import { ResultPage } from './components/Main/ResultPage/ResultPage';

import s from './index.css';
import { NewsPage } from './components/Main/NewsPage/NewsPage';
import { Footer } from './components/Footer/Footer';

class App extends React.Component{
  constructor(){
    super();
    
  }

  render(){
    return(
        <div className={s.app}>
            <Header className={s.header}/>
            <div className={s.container}> 
                <Route exact path='/' component={HomePage} /> 
                <Route path='/table' component={TablePage} />
                <Route path='/fixtures' component={FixturePage} />
                <Route path='/results' component={ResultPage} />
                <Route path='/clubs' component={ClubPage} />
                <Route path='/news' component={NewsPage} />
            </div>
            <Footer className={s.footer}/>
        </div>
    )
  }
}

ReactDOM.render(<Router><App /></Router>,document.getElementById('root'));