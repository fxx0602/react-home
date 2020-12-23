import React from 'react';
import { Route,HashRouter,Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Life from '../pages/Life';
import Shop from '../pages/Shop';
import Mine from '../pages/Mine';
import NotFound from '../pages/NotFound';
import City from '../pages/City';
import App from '../pages/App';
import Search from '../pages/Search';
import Details from '../pages/details';
import Login from '../pages/login';
import ShopCar from '../pages/shopCar';


export default class AppRouter extends React.Component {
  render() {
      return (
          <HashRouter>
              <App path="/">
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route  path="/life" component={Life}></Route>
                  <Route  path="/shop" component={Shop}></Route>
                  <Route path="/mine" component={Mine}></Route>
                  <Route path="/city" component={City}></Route>
                  <Route path="/search/:content" component={Search}></Route>
                  <Route path="/details/:id" component={Details}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/shopCar" component={ShopCar}></Route>
                  <Route  path="*" component={NotFound}></Route>
              </Switch>
              </App>
          </HashRouter>
      )
  }
}