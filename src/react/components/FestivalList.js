import React from 'react';
import ReactDOM from 'react-dom';
import festData from '../../data/festData.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class FestivalList extends React.Component {

  removeFest(fest_id, e) {
    console.log(fest_id);
    fetch('http://test.musefests.com/api/remove/festival/'+fest_id)
    .then((resp) => {
      location.reload(true);
    })
  }

  render(){
    let festsList = this.props.initialFests;
    let user = this.props.userInfo;
    return(
      <div>
      <div className="fest-list-main-content">
      {festsList.map(fest =>
        <div className="fest-list-container" key={fest.fest_id}>
        <div className="fest-list-wrapper">

        <div className="fest-list-content">

        <div className="left-content">
        <img src="/images/festival.jpg" alt="fest pic"/>
        </div>

        <div className="right-content">

        <div className="header">
        <div className="remove-fest">
        <button onClick={this.removeFest.bind(this,fest.fest_id)}>Remove Fest</button>
        </div>
        <div className="title">
        <a href={`/festival/${fest.fest_id}/${fest.title}`}>{fest.title}</a>
        </div>
        <div className="xs-hide btn-muse">
        <button className="muse-btn">Muse</button>
        </div>
        </div>
        <div className="date">
        <i className="fa fa-calendar-check-o" aria-hidden="true"></i> {(fest.from_date).split("T")[0]} | {fest.fromtime} Onwards
        </div>
        <div className="venue">
        <i className="fa fa-map-marker" aria-hidden="true"></i> {fest.city}, {fest.country}
        </div>
        <div className="about">
        {fest.short_desc}…. <b>Read More</b>
        </div>
        <div className="headline">
        Headliners: <a>DJ Snake</a>, <a>Dj David Guetta</a>, <a>DJ Skip</a> and +  35 more
        </div>

        </div>

        </div>
        <div className="xs btn-muse">
        <button className="muse-btn">Muse</button>
        </div>
        <div className="share-btns">
        <div className="share-text">Share with friends</div> <a><img src="/images/fb.png" alt=""/></a><a><img src="/images/insta.png" alt=""/></a>
        </div>
        </div>
        </div>

      )}
        </div>
      </div>
    )
  }
}

export default FestivalList
