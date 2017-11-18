import React from 'react';

class ArticlesList extends React.Component {

  render() {
    var articles = this.props.articles;
    return(
      <div className="blog-wrapper">
        <div className="blog-grid">
          {articles.map(blog =>
              <div className="blog-card" key={blog.id}>
                <div className="blog-card-wrapper">

                    <div className="background-img">
                      <img src={blog.img_url} alt="img"/>
                    </div>

                    <div className="foreground-title">
                      <div className="banner-heart">
                        <a href="#"><img src="/images/heart.png" alt="img"/></a>
                      </div>
                        <a href={`/article/${blog.id}/${blog.title}`}><div className="blog-grid-title">{blog.title}</div></a>
                    </div>

                </div>
              </div>
          )}
        </div>
      </div>
    )
  }
}

export default ArticlesList;
