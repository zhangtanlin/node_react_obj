import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'

import 'antd/dist/antd.less';
import "./iconfont/iconfont.css";



import Index from './components/index/index';
import Login from './components/login/login';

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