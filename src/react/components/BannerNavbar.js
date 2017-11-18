import React from 'react';

class BannerNavbar extends React.Component {
  render(){
    console.log(this.props.user_id);
    return(
      <div className="fest-navbar">
            <div className="subnavbar-content">
              <a href={`/edit/article/${this.props.blog_id}/${this.props.user_id}/${this.props.blog_title}`}>Edit</a>
            </div>
            <div className="subnavbar-content">
              <a href='/'>Delete</a>
            </div>
      </div>
    )
  }
}

export default BannerNavbar;
