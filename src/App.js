import React, { Component } from 'react';
import './App.css';
// import {Route,  HashRouter as Router,Link} from 'react-router-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import { Home } from './containers/home';
import { Setmeal } from './containers/setmeal';
import { Cardpurchase } from './containers/cardpurchase';
import { Orderdetails } from './containers/orderdetails';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div style={{ height: '100%' }}>
        <LocaleProvider locale={zhCN}>
          <Route path="/" component={Home}>
            <IndexRoute component={Setmeal} />
            <Route path="/cardpurchase" component={Cardpurchase} />
            <Route path="/orderdetails" component={Orderdetails} />
          </Route>
          </LocaleProvider>
        </div>
      </Router>
    );
  }
}

export default App;
