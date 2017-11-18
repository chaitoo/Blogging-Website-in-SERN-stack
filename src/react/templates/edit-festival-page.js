import React from 'react';
import ReactDOM from 'react-dom';

class EditFestival extends React.Component {
  render() {
    var festContent = this.props.festival;
    var performers = this.props.performers;
    return(
      <div>
      <div className="page-title">
        Add New Festival
        <div className="gap"></div>
      </div>
      {
        festContent.length===0 ? ( <div></div> ) : (
      <form className="add-festival" action="/api/add/festival" method="post">

        <div className="form-row"><label>Title</label><input type="text" name="title" placeholder="Title" value={festContent.title}/></div>
        <div className="form-row"><label>Subtitle</label><input type="text" name="subtitle" placeholder="Subtitle"/></div>
        <div className="form-row"><label>Full Title</label><input type="text" name="fullTitle" placeholder="Full Title"/></div>
        <div className="form-row"><label>Date</label></div>
        <div className="form-row"><label>From:</label><input type="text" name="fromDate" placeholder="From Date"/></div>
        <div className="form-row"><label>To: </label><input type="text" name="toDate" placeholder="To Date"/></div>
        <div className="form-row"><label>Description</label><textarea name="description" rows="8" cols="90"></textarea></div>
        <div className="form-row"><label>Capacity</label><input type="text" name="capacity" placeholder="capacity"/></div>
        <div className="form-row"><label>Age</label><input type="number" name="age" placeholder="Age"/></div>
        <div className="form-row"><label>Budget</label><input type="text" name="budget" placeholder="Budget"/></div>
        <div className="form-row"><label>City</label><input type="text" name="city" placeholder="City"/></div>
        <div className="form-row"><label>Country</label><input type="text" name="country" placeholder="country"/></div>
        <div className="form-row"><label>Image URL</label><input type="text" name="img_url" placeholder="Image URL"/></div>

        <div className="form-row submit-btn"><input type="submit" name="Save"/></div>
      </form>
    )}
      </div>
    )
  }
}

export default EditFestival
