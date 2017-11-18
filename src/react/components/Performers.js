import React from 'react';
import ReactDOM from 'react-dom';

import PerformerDetails from './PerformerDetails.js'

class Performers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performer : []
    }
  }

  showPerformer(performer, e) {
    let content = document.getElementsByClassName("performer-background");
    content[0].style.display = "block";
    document.body.style.overflow = "hidden";
    this.setState({performer:performer})
  }

  render(){
    let performers = [];
    if(this.props.performersList) {
      performers = this.props.performersList;
    }
    return(
      <div>
      {performers.length===0?<div></div>:(
        <div>
            <div>
              <PerformerDetails details = {this.state.performer}/>
            </div>
            <div className="performers">
              <div className="page-title">
                HEADLINERS
                <div className="gap"></div>
              </div>
              <div className="performers-wrapper">
                <div className="performers-div-main">

                {performers.map( performer =>
                  <div className="performer-tile-main" onClick={this.showPerformer.bind(this, performer)} key={performer.artist_id}>
                      <img src={performer.img_url} alt="performer"/>
                      <div className="headliner-name">
                        <div className="headline-overlay-name">
                          {performer.name}
                        </div>
                      </div>

                  </div>
                )}

                </div>
                <button className="performer-slide-left-btn" >&#10094;</button>
                <button className="performer-slide-right-btn" >&#10095;</button>

              </div>
            </div>
        </div>
      )}        
      </div>
    )
  }
}

export default Performers
