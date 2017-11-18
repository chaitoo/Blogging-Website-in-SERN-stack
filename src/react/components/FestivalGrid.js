import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import festData from '../../data/festData.js';

class FestivalGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state={festivals:props.fests};
    //this.loadData = this.loadData.bind(this);
  }
  componentDidMount() {
    this.setState({festivals:this.props.fests})
  }

    // loadData() {
    //   var _this = this;
    //   fetch('http://localhost:2525/api/fests')
    //     .then(resp => resp.json())
    //     .then(function (data) {
    //         _this.setState ({festivals:data});
    //     })
    //     .catch(function(e) {
    //       console.log("err api fetching"+e);
    //     });
    // }
    //
    // componentDidMount() {
    //   this.loadData();
    // }

  render(){
    return(
      <div>
        {!this.state?(<div>none</div>):this.props.fests.map(fest =>
          <div className='card' key={fest.fest_id}>
            <div className='card-wrapper'>

              <div className="primary-content">
                <div className='fest-thumb'>
                  <img src={fest.img_url} alt="image"/>
                  <div className="heart">
                    <a href="#"><img src="/images/heart.png" alt=""/></a>
                  </div>
                </div>

                <div className='fest-content'>
                  <div className='fest-title'><a href="#">{fest.title}</a></div>
                  <div className='fest-venue'><img src="/images/flag.png" alt="flag"/> {fest.city}, {fest.country} </div>
                  <div className='fest-date'><img src="/images/calendar.png" alt="date"/> {(fest.from_date).split("T")[0]} - {(fest.to_date).split("T")[0]}</div>
                </div>
              </div>


            </div>
          </div>
        )}
      </div>
    )
  }
}

export default FestivalGrid
