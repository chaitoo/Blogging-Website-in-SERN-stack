import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import HomePage from './home';

class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {festGrid:[]}
  }

  componentDidMount() {
    var _this = this;
    fetch('http://test.musefests.com/api/fests')
      .then(resp => resp.json())
      .then(function (data) {
        _this.setState({festGrid:data})
      })
  }

  render() {
    return(
      <div>
        <HomePage fests={this.state.festGrid}/>
      </div>
    )
  }
}

export default HomeContainer
