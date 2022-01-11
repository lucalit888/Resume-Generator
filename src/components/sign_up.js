/* eslint-disable no-lonely-if */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import validator from 'validator';
import { signupUser } from '../actions';
import '../style.scss';
import '../styles/sign-up.scss';

class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmpassword: null,
      resume: null,
    };
  }

  componentDidMount() {
  }

  OnInputChangeEmail = (event) => {
    this.setState(((prevState) => ({ email: event.target.value })));
  }

  OnInputChangePassword = (event) => {
    this.setState(((prevState) => ({ password: event.target.value })));
  }

  OnInputChangeConfirm = (event) => {
    this.setState(((prevState) => ({ confirmpassword: event.target.value })));
  }

  OnInputChangeFirstname = (event) => {
    this.setState(((prevState) => ({ firstName: event.target.value })));
  }

  OnInputChangeLastname = (event) => {
    this.setState(((prevState) => ({ lastName: event.target.value })));
  }

  submitinfo = () => {
    if (this.state.confirmpassword !== this.state.password || this.state.email == null || this.state.firstName == null || this.state.lastName == null || this.state.password == null || this.state.password.length < 8 || !validator.isEmail(this.state.email.toString())) {
      console.log('unable to signup user. missing, invalid, fields or mismatch password');
    } else {
      this.props.signupUser(this.state, this.props.history);
    }
  }

  displayPasswordMismatch = () => {
    if (this.state.confirmpassword === this.state.password) {
      return (
        null
      );
    } else {
      return (
        <div className="errormsg">Passwords must match!</div>
      );
    }
  }

  displayMissingFirstName = () => {
    if (this.state.firstName === null || this.state.firstName === '') {
      return (
        <div className="errormsg">First name is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingLastName = () => {
    if (this.state.lastName === null || this.state.lastName === '') {
      return (
        <div className="errormsg">Last name is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingEmail = () => {
    if (this.state.email === null || this.state.email === '') {
      return (
        <div className="errormsg">Email is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingPassword = () => {
    if (this.state.password === null || this.state.password === '') {
      return (
        <div className="errormsg">Password is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayMissingConfirm = () => {
    if (this.state.confirmpassword === null || this.state.confirmpassword === '') {
      return (
        <div className="errormsg">Confirm password is required!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayPasswordLengthError = () => {
    if (this.state.password !== null && this.state.password.length < 8) {
      return (
        <div className="errormsg">Password must be longer than 8 characters!</div>
      );
    } else {
      return (
        null
      );
    }
  }

  displayEmailUsed = (props) => {
    if (this.props.autherr === 'Error: Email is in use') {
      return (
        <div className="errormsg">Email is already in use!</div>
      );
    } else {
      return null;
    }
  }

  displayInvalidEmail = () => {
    if (this.state.email !== null) {
      if (validator.isEmail(this.state.email)) {
        return (
          null
        );
      } else {
        if (this.state.email !== '') {
          return (
            <div className="errormsg">Email Invalid</div>
          );
        } else {
          return (null);
        }
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="form">
        <div className="centeringform">
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
          <div className="input-container ic1">
            <input id="firstname" className="input" type="text" placeholder=" " onChange={this.OnInputChangeFirstname} />
            <div className="cut" />
            <label htmlFor="firstname" className="placeholder">First name</label>
            {this.displayMissingFirstName()}
          </div>
          <div className="input-container ic2">
            <input id="lastname" className="input" type="text" placeholder=" " onChange={this.OnInputChangeLastname} />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">Last name</label>
            {this.displayMissingLastName()}
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " onChange={this.OnInputChangeEmail} />
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">Email</label>
            <div className="errornamebunch">
              {this.displayMissingEmail()} {this.displayInvalidEmail()} {this.displayEmailUsed()}
            </div>
          </div>
          <div className="input-container ic2">
            <input id="password" className="input" type="password" placeholder=" " onChange={this.OnInputChangePassword} />
            <div className="cut" />
            <label htmlFor="password" className="placeholder">Password</label>
            {this.displayMissingPassword()}
            {this.displayPasswordLengthError()}
          </div>
          <div className="input-container ic2">
            <input id="confirmpass" className="input" type="password" placeholder=" " onChange={this.OnInputChangeConfirm} />
            <div className="cut cutlong" />
            <label htmlFor="confirmpass" className="placeholder">Confirm Password</label>
            {this.displayMissingConfirm()}
            {this.displayPasswordMismatch()}
          </div>
          <div className="signup-button" onClick={this.submitinfo}>Sign Up</div>
          <p>Already have an account? Sign in <NavLink className="signinup" exact to="/signin">Here</NavLink></p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  autherr: reduxState.auth.authError,
});

export default withRouter(connect(mapStateToProps, { signupUser })(signUp));
