/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../styles/navbar_style.scss';
import { connect } from 'react-redux';
import {
  withRouter,
  NavLink,
} from 'react-router-dom';

import { signoutUser } from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio_page: '',
    };
  }

  componentDidMount = () => {
    if (this.props.history.location.pathname.includes('/portfolios/') && !this.props.history.location.pathname.includes('/edit/')) {
      this.setState({ portfolio_page: true });
    }
  }

  displayNav = (props) => {
    console.log(this.props.auth);
    const { auth } = this.props;
    if (auth && this.state.portfolio_page !== true) {
      return (
        <nav>
          <ul className="navbar">
            <NavLink className="resumov" exact to="/profile"><h1>Resumov</h1></NavLink>
            <div className="lefttabs">
              <NavLink to="/profile" className="signinup"><h1>Profile</h1></NavLink>
              <div className="signinup" onClick={() => { this.props.signoutUser(this.props.history); }}><h1>Signout</h1></div>
            </div>
          </ul>
        </nav>
      );
    } else if (this.state.portfolio_page) {
      console.log('IN A PORTFOLIO PAGE', this.props.history.location.pathname);
      return (
        <div />
      );
    } else {
      return (
        <nav>
          <ul className="navbar">
            <NavLink className="resumov" exact to="/"><h1>Resumov</h1></NavLink>
            <div className="lefttabs">
              <NavLink className="signinup" exact to="/signin"><h1>Sign In</h1></NavLink>
              <NavLink className="signinup" exact to="/signup"><h1>Sign Up</h1></NavLink>
            </div>
          </ul>
        </nav>
      );
    }
  };

  render() {
    return (
      <div>
        {this.displayNav()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    auth: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
