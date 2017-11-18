import React from 'react';
import ReactDOM from 'react-dom';
import FestivalPage from './festival-page';
import EditFestivalPage from './edit-festival-page';
import Performers from '../components/Performers';

class FestivalPageContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        festContent:[],
        performersContent:[]
      }
  }

  componentDidMount() {
    let fest_id = this.props.match.params._id;
    let _this = this;
    fetch('http://test.musefests.com/api/festival/'+fest_id)
      .then(resp => resp.json())
      .then(function (data) {
        _this.setState({
          festContent:data.festData,
          performersContent:data.performers[0]
        })
      })
  }

  render() {
    return(
      <div>
        <FestivalPage festContent={this.state.festContent} performersList={this.state.performersContent}/>
      </div>
    )
  }
}

export default FestivalPageContainer
