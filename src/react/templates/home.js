import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FestivalGrid from '../components/FestivalGrid';

class HomePage extends React.Component {

  render() {
    //console.log(this.props.fests);
    return(
      <div>
            <div className="banner-component">
            <div className="banner-img">
              <img src="http://media2.intoday.in/indiatoday/images/stories//2015August/bacardi-nh7-weekender-shillong,-october_mos_082715041824.jpg" alt="banner"/>
            </div>
            <div className="banner-overlay">
            <div className="banner-title">
              Your Online Guide To Worlds Music Festival Across The Globe
            </div>
             <div className="search-div">
               <input type="text" placeholder="Search for your favorite festivals, articles and videos"/>
               <button type="button" name="button">Search</button>
             </div>
            </div>
          </div>

              <div className="trending-div">
            <div className="trending-title">
              Trending Festivals Around The World
            </div>
            <div className="trending-subtitle">
              Discover f festivals across the globe. Preview for quality videos and Muse to stay connected
            </div>
          </div>

          <div className="grid">
            <FestivalGrid fests = {this.props.fests}/>
          </div>
          <div className="load-more">
              <Link to="/festivals">View More</Link>
          </div>
      </div>

    )
  }
 }

 export default HomePage
