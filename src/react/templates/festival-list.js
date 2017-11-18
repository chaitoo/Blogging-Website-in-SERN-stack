import React from 'react';
import ReactDOM from 'react-dom';
import FestivalList from '../components/FestivalList';

class FestivalListPage extends React.Component {
  render(){
    return(
      <div>
          <div className="fest-list">

            <div className="page-title">
              Discover Trending Festivals
            </div>
            <FestivalList initialFests = {this.props.initialFests}/>
          </div>
      </div>
    )
  }
}

export default FestivalListPage
