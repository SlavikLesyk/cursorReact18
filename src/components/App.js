import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home/Home';
import Contacts from './Contacts/Contacts';
import Posts from './Posts/Posts';
import Header from './Header/Header';
import Photos from './Photos/Photos'
import './App.css';

export const MENU = [{
  title: 'Home',
  path: '/Home',
  component: Home,
  exact: true
}, {
  title: 'Posts',
  path: '/Posts',
  component: Posts,
  exact: true
}, {
  title: 'Photos',
  path: '/Photos',
  component: Photos,
  exact: true
}, {
  title: 'Contacts',
  path: '/Contacts',
  component: Contacts,
  exact: true
}]

class App extends  React.Component{

  render(){
    return (
        <Router>          
          <div>
            <Header />
            <Switch>          
              {MENU.map(({path, component, exact = false}, index) =>{ 
                return (
              <Route path={path} component={component} exact={exact} key={index} />
              )}
              )}
              <Route path='/' exact render={() => <Redirect to="/Home" />} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;