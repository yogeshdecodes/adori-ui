import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ history }) => {
  return (
    <header className="wrapper">
      <div className="logo">
        <Link href="/">
          <img src="/images/logo.png" alt="Listen Boise" />
        </Link>
      </div>

      <div className="midHeadContainer">
        <Link className="nav-item" to="/featured">
          <i className="fa fa-headphones"></i>
          <span>&nbsp;Featured</span>
        </Link>
        <Link className="nav-item" to="/explore">
          <i className="fas fa-podcast"></i>
          <span>&nbsp;Explore</span>
        </Link>
        <Link className="nav-item" to="/myactivity">
          <i className="fas fa-user"></i>
          <span>&nbsp;My Podcasts</span>
        </Link>
      </div>

      <div className="LoginContainer">
        <Link className="nav-item" to="/">
          <i className="fa fa-sign-out-alt"></i>
          <span>&nbsp;Login</span>
        </Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
