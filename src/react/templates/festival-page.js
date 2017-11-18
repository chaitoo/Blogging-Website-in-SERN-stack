import React from 'react';
import ReactDOM from 'react-dom';

import Performers from '../components/Performers.js';
import accessRights from '../../rbac.js';

class FestivalPage extends React.Component {

  render(){
    let festContent = this.props.festContent;
    let user = this.props.userInfo;
    var canEdit = accessRights.can(user.role,'edit');
    console.log(canEdit);
    return(
      <div className="festival-body">
        {
          festContent.length===0 ? ( <div></div> ) : (
        <div>
        <div className="banner">
          <div className="fest-navbar">
            <div className="subnavbar-content">
              <a href="#overview">Overview</a>
            </div>
            <div className="subnavbar-content">
              <a href="#lineup">Lineup</a>
            </div>
            <div className="subnavbar-content">
              <a href="#gallery">Gallery</a>
            </div>
            <div className="subnavbar-content">
              <a href="#venue">Venue</a>
            </div>
            <div className="subnavbar-content">
              <a href="#faq">FAQ</a>
            </div>
            {
              canEdit ?
              <div className="subnavbar-content">
                <div className="subnavbar-content">
                    <a href={`/edit/festival/${festContent.fest_id}/${user.id}/${festContent.title}`}>Edit</a>
                </div>
                <div className="subnavbar-content">
                    <a href={`/edit/festival/${festContent.fest_id}/${user.id}/${festContent.title}`}>Delete</a>
                </div>
              </div>
             : <div></div>

            }

          </div>
          <div className="fest-banner-overlay">
            <div className="fest-banner-overlay-title">
              {festContent.title}
            </div>
            <div className="fest-banner-overlay-subtitle">
              {festContent.subtitle}
            </div>
            <div className="overlay-down">
            <a href="#overview">  <i className="fa fa-angle-down" aria-hidden="true"></i></a>
            </div>
          </div>
          <img src="/images/festcover.png" alt="fest banner"/>
        </div>

        <div id="overview" className="info-content">
          <div className="page-title">
            THE BASICS
            <div className="gap"></div>
          </div>
          <div className="fest-info">

            <div className="fest-date">
              {(festContent.from_date).split("T")[0]}-{(festContent.to_date).split("T")[0]}
            </div>
            <div className="fest-venue">
            <img src="/images/flag.png" alt="flag"/>  {festContent.city}, {festContent.country}
            </div>
            <div className="fest-about">
              {festContent.description}
            </div>
            <div className="share-btns-fest">
              <div className="share-text-fest">Share with friends</div> <a><img src="/images/fb.png" alt=""/></a><a><img src="/images/insta.png" alt=""/></a>
            </div>
          </div>

          <div className="fest-meta">
            <div className="meta-item">
              <button className="meta-muse">Muse</button>
            </div>
            <div className="meta-content">
              <div className="meta-item">
                <i className="fa fa-calendar" aria-hidden="true"></i> Happening on {(festContent.from_date).split("T")[0]}
              </div>
              <div className="meta-item">
                <i className="fa fa-building" aria-hidden="true"></i> Can Accomodate {festContent.capacity} People
              </div>
              <div className="meta-item">
                <i className="fa fa-clock-o" aria-hidden="true"></i> This festival is {festContent.age} years old
              </div>
              <div className="meta-item">
                <i className="fa fa-money" aria-hidden="true"></i> Will cost around {festContent.budget}
              </div>

              <div className="meta-item">
                <i className="fa fa-calendar" aria-hidden="true"></i> Happening on {(festContent.from_date).split("T")[0]}
              </div>
              <div className="meta-item">
                <i className="fa fa-building" aria-hidden="true"></i> Can Accomodate {festContent.capacity} People
              </div>
              <div className="meta-item">
                <i className="fa fa-clock-o" aria-hidden="true"></i> This festival is {festContent.age} years old
              </div>
              <div className="meta-item">
                <i className="fa fa-money" aria-hidden="true"></i> Will cost around {festContent.budget}
              </div>
            </div>
          </div>
        </div>
      </div>
        )
      }
      </div>
    )
  }
}

export default FestivalPage
