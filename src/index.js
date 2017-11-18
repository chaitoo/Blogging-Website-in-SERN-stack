import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navbar from './react/components/Navbar.js'
import HomePageContainer from './react/templates/homeContainer.js'
import FestivalListPageContainer from './react/templates/festival-list-container.js'
import FestivalPageContainer from './react/templates/festival-page-container.js'

import festData from './data/festData.js';
import './static/third-party/font-awesome/css/font-awesome.min.css';
import './static/css/mobile-styles.css';
import './static/css/home.css';
import './static/css/festival-page.css';
import './static/css/festival-list.css';
import './static/css/crud-styles.css';

window.onload = () => {
  ReactDOM.render(
    <Router>
      <div>
        <Route component={Navbar}/>
        <Route exact path="/" component={ HomePageContainer }/>
        <Route exact path="/festivals" component={ FestivalListPageContainer }/>
        <Route exact path="/festival/:_id/:title" component={ FestivalPageContainer }/>
      </div>
    </Router>,
    document.getElementById('main')
  );
}
