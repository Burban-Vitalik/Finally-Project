import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from './components/Header/Header';

import './index.css';
class App extends React.Component{
  constructor(){
    super();
    
  }

  render(){
    return(
        <div>
            <Header />

        </div>
    )
  }
}

ReactDOM.render(<Router><App /></Router>,document.getElementById('root'));