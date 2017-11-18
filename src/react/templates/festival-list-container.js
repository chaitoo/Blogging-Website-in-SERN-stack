import React from 'react';
import ReactDOM from 'react-dom';
import FestivalListPage from './festival-list';

class FestivalListPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {festsList:[]}
  }
  componentDidMount() {
    var _this = this;
    fetch('http://test.musefests.com/api/fests')
      .then(resp => resp.json())
      .then(function (data) {
        _this.setState({festsList:data});
      })
  }
  render(){
    return(
      <div>
          <div className="fest-list">

            <FestivalListPage initialFests = {this.state.festsList}/>
          </div>
      </div>
    )
  }
}

export default FestivalListPageContainer
