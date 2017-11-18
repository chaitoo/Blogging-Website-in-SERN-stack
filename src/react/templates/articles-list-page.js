import React from 'react';
import ArticlesList from '../components/ArticlesList';

class ArticlesListPage extends React.Component {
  render() {
    return(
      <div>
        <div className="page-title">
          Discover Trending Articles
        </div>
        <ArticlesList articles={this.props.articles}/>
        <div className="load-more">
            <a>View More</a>
        </div>
      </div>
    )
  }
}

export default ArticlesListPage;
