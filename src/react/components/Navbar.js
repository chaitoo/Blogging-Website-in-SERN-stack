import React from 'react';
import ReactDOM from 'react-dom';


class Navbar extends React.Component {

  render(){
    let user = this.props.userInfo;
    return(
      <div>
      <div className="navbar">

    <div className="nav-logo">
       <a href="/"><img src="/images/logo.png" alt="logo"/></a>
    </div>

    <div className="mobile-navbar-content nav-button-xs">
      <div className="xs user-login nav-button-xs">
        <i className="fa fa-user " aria-hidden="true"></i>
      </div>

      <div className="xs ham-icon nav-button-xs">
        <i className="fa fa-bars nav-ham-button-xs" aria-hidden="true"></i>
      </div>
    </div>


    <div className="nav-body hide">
        <div className="nav-content">
          <a href="/festivals">Festivals</a>
        </div>
        <div className="nav-content">
          <a href="/articles">Articles</a>
        </div>
        <div className="nav-content">
          <a href="/videos">Videos</a>
        </div>
        <div className="nav-content">
          <a href="/search">Search</a>
        </div>
    </div>
    {
      (Object.keys(user).length !== 0 && user.constructor === Object)?
      <div className="login-div hide">
        <div className="nav-industry-login">
          <a>Hello {user.firstname}</a>
        </div>
        <div className="nav-login ">
          <a className="navbar-user-options"><i className="fa fa-user-o" aria-hidden="true"></i></a>
        </div>
      </div> :
      <div className="login-div hide">
        <div className="nav-industry-login">
          <a href="/signup">Industry Sign In</a>
        </div>

        <div className="nav-login">
          <a href="/signin">Log In</a>
        </div>
      </div>
    }


  </div>
    <div className="user-options-wrapper">
      <div className="user-options">
        <a href="/add/festival">Add New Festival</a>
      </div>
      <div className="user-options">
        <a href="/add/article">Add New Article</a>
      </div>
      <div className="user-options">
      <a href="/logout">Logout</a>
      </div>
    </div>
  </div>
    )
  }
}

export default Navbar
