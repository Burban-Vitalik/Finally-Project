import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import { Header } from './components/Header/Header';
import { HomePage } from './components/Main/HomePage/HomePage';
import { TablePage } from './components/Main/TablePage/TablePage';

import './index.css';
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
                {/* <Route path='/...' component={..} /> */} {/*При кліку, тут буде відображено весь контент сайту цієї компоненти*/}
            </div>
        </div>
    )
  }
}

ReactDOM.render(<Router><App /></Router>,document.getElementById('root'));