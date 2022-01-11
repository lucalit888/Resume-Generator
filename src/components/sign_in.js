/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser } from '../actions';
import '../styles/sign_in.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
  }

  handlePassword = (event) => {
    this.setState(((prevState) => ({
      user: {
        ...prevState.user,
        password: event.target.value,
      },
    })));
  }

  handleUsername = (event) => {
    this.setState(((prevState) => ({
      user: {
        ...prevState.user,
        email: event.target.value,
      },
    })));
  }

  displayIncorrectFields = (props) => {
    if (this.props.autherr === 'Failed sign in') {
      return (
        <div> Incorrect username or password! </div>
      );
    } else {
      return (
        null
      );
    }
  }

  renderSignInError = () => {
    console.log(this.state.authenticated);
    if (this.state.authenticated === false) {
      return (
        <div>Invalid Username or Password</div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="signin-page">
        <h1>Welcome back!</h1>
        <form className="form-signin">
          <input type="text" name="username" placeholder="Username" onChange={this.handleUsername} />
          <input type="password" name="password" placeholder="Password" onChange={this.handlePassword} />
          {this.displayIncorrectFields()}
          <div className="sign-in-button"
            onClick={() => {
              this.props.signinUser(this.state.user, this.props.history);
            }}
          ><h2>Sign In</h2>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  autherr: reduxState.auth.authError,
});

export default withRouter(connect(mapStateToProps, { signinUser })(SignIn));
