import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import "isomorphic-fetch";

import Navbar from './react/components/Navbar.js'
import HomePage from './react/templates/home.js'
import FestivalListPage from './react/templates/festival-list.js'
const Routes = ({initial}) => (
  <div>
    <Route path="/" component={Navbar}/>
    <Route exact path="/" render = {() =>
      <HomePage fests = {initial} />
    }/>
    <Route exact path="/festivals" component={FestivalListPage}/>
  </div>
)

export default Routes
