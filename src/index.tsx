import '../node_modules/bootstrap/scss/bootstrap.scss';

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Bootstrap from './components/bootstrap/bootstrap';
import Home from './views/home/home';

render(
  <Router>
    <Bootstrap>
      <Switch>
        <Route exact path='/' component={Home as any}/>
        <Route exact path='/home' component={Home as any}/>
        {/*<Route path='/new' component={newContact}/>*/}
      </Switch>
    </Bootstrap>
  </Router>,
  document.getElementById('app')
);