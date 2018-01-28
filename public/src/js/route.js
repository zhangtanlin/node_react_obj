import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

import 'antd/dist/antd.css';

import Index from './components/pc/index';
import Login from './components/pc/login';

class Root extends React.Component{
 render(){
   return (
     <Router>
       <div>
         <Route path='/' component={Index}></Route>
         <Route path='/login' component={Login}></Route>
       </div>
     </Router>
   );
 }
};

ReactDOM.render(<Root/>,document.getElementById("example"));