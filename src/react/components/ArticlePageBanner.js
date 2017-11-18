import React from 'react';
import BannerNavbar from './BannerNavbar'
import accessRights from '../../rbac.js';

class ArticlePageBanner extends React.Component {
  render() {
    let blogContent = this.props.blogDetails;
    let user = this.props.userInfo;
    let accessParams = {
      user:{},
      post:{}
    };
    accessParams.user.id=user.id;
    accessParams.post.owner = blogContent.writer_id;
    var canEdit = accessRights.can(user.role,'edit',accessParams);
    return(
      <div className="banner">
      {canEdit?<BannerNavbar blog_id={blogContent.id} user_id={user.id} blog_title={blogContent.title}/>:<div></div>}
        <div className="fest-banner-overlay">
          <div className="fest-banner-overlay-title">
            {blogContent.title}
          </div>
          <div className="fest-banner-overlay-subtitle">
            {blogContent.subtitle}
          </div>
          <div className="overlay-down">
          <a href="#overview">  <i className="fa fa-angle-down" aria-hidden="true"></i></a>
          </div>
        </div>
      <img src={blogContent.img_url} alt="fest banner"/>
      </div>
    )
  }
}

export default ArticlePageBanner;
