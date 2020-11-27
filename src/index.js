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
            <div className='content'> 
                {/* <Route path='' component={Home} /> */} {/*При кліку, тут буде відображено весь контент сайту цієї компоненти*/}
                {/* <Route path='/Tables' component={Tables} /> */} {/*При кліку, тут буде відображено весь контент сайту цієї компоненти*/}
                {/* <Route path='/...' component={..} /> */} {/*При кліку, тут буде відображено весь контент сайту цієї компоненти*/}
            </div>
        </div>
    )
  }
}

ReactDOM.render(<Router><App /></Router>,document.getElementById('root'));