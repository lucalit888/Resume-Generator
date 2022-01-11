/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import '../styles/landing_page.scss';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getStarted = (props) => {
    if (this.props.auth) {
      return (
        <NavLink exact to="/profile">
          <button className="button" type="button"><span>Lets get Started  </span></button>
        </NavLink>
      );
    } else {
      return (
        <NavLink exact to="/signup">
          <button className="button" type="button"><span>Lets get Started  </span></button>
        </NavLink>
      );
    }
  }

  startNow = (props) => {
    if (this.props.auth) {
      return (
        <NavLink exact to="/profile">
          <button className="button startbutton" type="button"><span>Start Now  </span></button>
        </NavLink>
      );
    } else {
      return (
        <NavLink exact to="/signup">
          <button className="button startbutton" type="button"><span>Start Now  </span></button>
        </NavLink>
      );
    }
  }

  render() {
    return (
      <div className="landing-page">
        <div className="header-container">
          <p>Build your personal portfolio </p>
          <p>website in just a few clicks!</p>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <a href="#centerpart" className="downwardarrow"><FontAwesomeIcon icon={faChevronDown} /></a>
          {this.getStarted()}
        </div>
        <div className="center-container" id="centerpart">
          {/* converted image into a link using postimg.cc */}
          <div className="image"><img src="https://miro.medium.com/max/1600/0*yiSSYT812xOs77TZ.gif" alt="" /></div>
          <div className="textpart">
            <p>You’re destined for big things, let's get you there! <br />Make a beautiful site to showcase all your amazing experiences.</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="textpart">
            <p>Boost your applications <br /> and get your dream job now!</p>
          </div>
          <div className="image"><img src="https://i.postimg.cc/Xv8XcLHQ/giphy-1.gif" alt="" /></div>
        </div>
        {this.startNow()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
});

export default withRouter(connect(mapStateToProps, { })(LandingPage));
