import React from 'react';
import ReactDOM from 'react-dom';

class PerformerDetails extends React.Component {
  hidePerformer(e) {
    if(e.target.className == "performer-background"){
      document.getElementsByClassName("performer-background")[0].style.display = "none";
      document.body.style.overflow = "scroll";
    }
  }
  render(){
    let performerDetails = this.props.details;
    return(
      <div>


      <div className="performer-section">
    <div className="performer-background" onClick={this.hidePerformer.bind(this)}>
    {performerDetails.length===0?<div></div>:
      <div className="performer-wrapper">

        <div className="performer-title-section">
          <div className="performer-title">
            {performerDetails.name}
          </div>
          <div className="performer-tags">

              <div className="tag">
                {PerformerDetails.tags}
              </div>

          </div>
        </div>

        <div className="performer-content">
          <div className="performer-img">
            <img src={performerDetails.img_url} alt="performer-img" />
          </div>
          <div className="performer-about">
            {performerDetails.about}
          </div>
          <div className="preview-btn-div">
            <button className="meta-muse">Preview</button>
          </div>
        </div>

      </div>
    }
      </div>
      </div>
      </div>
    )
  }
}

export default PerformerDetails
