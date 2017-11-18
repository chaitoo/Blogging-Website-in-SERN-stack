import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import FestivalGrid from '../components/FestivalGrid';

class FestivalGridContainer extends React.Component {
  render() {
    return(
      <div>
        <div className="grid">
            <FestivalGrid fests = {this.props.fests} />
        </div>
        <div className="load-more">
            <a href="/festivals">View More</a>
        </div>
      </div>
    )
  }
}

export default FestivalGridContainer
