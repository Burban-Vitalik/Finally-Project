import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import { Header } from './components/Header/Header';
import { ClubPage } from './components/Main/ClubPage/ClubPage';
import { FixturePage } from './components/Main/FixturePage/FixturePage';
import { HomePage } from './components/Main/HomePage/HomePage';
import { TablePage } from './components/Main/TablePage/TablePage';
import { ResultPage } from './components/Main/ResultPage/ResultPage';

import './index.css';
import { NewsPage } from './components/Main/NewsPage/NewsPage';
class App extends React.Component{
  constructor(){
    super();
    
  }

  render(){
    return(
        <div>
            <Header />
            <div className='container'> 
                <Route path='/home' component={HomePage} /> 
                <Route path='/table' component={TablePage} />
                <Route path='/fixtures' component={FixturePage} />
                <Route path='/results' component={ResultPage} />
                <Route path='/clubs' component={ClubPage} />
                <Route path='/news' component={NewsPage} />
            </div>
        </div>
    )
  }
}

ReactDOM.render(<Router><App /></Router>,document.getElementById('root'));