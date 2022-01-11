/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import {
  withRouter,
  NavLink,
} from 'react-router-dom';
import { getUserProfile } from '../actions/index';
import '../styles/profile-page.scss';

// Profile page commponent that displays username, email, and provides routed
// options to create, print, edit resume, as well as settings and logout
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = (props) => {
    this.props.getUserProfile();
  }

  displayViewExistingButton = (props) => {
    if (this.props.profile.portfolioIds === undefined || this.props.profile.portfolioIds.length === 0) {
      return null;
    } else {
      return (
        <div className="view-portfolios">
          <NavLink exact to="/portfolios">
            <button className="button profilebuttons" type="button"><span>View Existing Portfolios</span></button>
          </NavLink>
        </div>
      );
    }
  }

  displayProfileImage = (props) => {
    if (this.props.profile.profileUrl === '') {
      return (
        <NavLink exact to="/settings">
          <img src="https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg" alt="none" />
        </NavLink>
      );
    } else {
      return (
        <NavLink exact to="/settings">
          <img src={this.props.profile.profileUrl} alt="none" />
        </NavLink>
      );
    }
  }

  render() {
    return (
      <div className="profile-page">
        <div className="profile-user-info">
          <div className="profile-img">
            {this.displayProfileImage()}
          </div>
          <div className="profile-info">
            <div className="profile-info-name">{this.props.profile.firstName} {this.props.profile.lastName}</div>
            <div className="profile-info-email">{this.props.profile.email}</div>
          </div>
        </div>
        {this.displayViewExistingButton()}
        <div className="create-portfolio">
          <NavLink exact to="/templates">
            <button className="button profilebuttons" type="button"><span>Create New Portfolio</span></button>
          </NavLink>
        </div>
        <div className="settings">
          <NavLink exact to="/settings">
            <button className="button profilebuttons" type="button"><span>Settings</span></button>
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.user.profile,
});

// export default Profile;
export default withRouter(connect(mapStateToProps, { getUserProfile })(Profile));
