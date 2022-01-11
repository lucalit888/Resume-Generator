/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import validator from 'validator';
import { getUserProfile, updateUserProfile } from '../actions/index';
import { uploadImage } from '../s3';
import '../styles/settings.scss';

// Profile page commponent that displays username, email, and provides routed
// options to create, print, edit resume, as well as settings and logout
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      editing: false,
      preview: '',
      file: null,
    };
  }

  // fetching user profile information
  componentDidMount = (props) => {
    this.props.getUserProfile();
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...this.props.profile,
      },
    })));
  }

  handleFirstName = (event) => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        firstName: event.target.value,
      },
    })));
  }

  handleLastName = (event) => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        lastName: event.target.value,
      },
    })));
  }

  handleEmail = (event) => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        email: event.target.value,
      },
    })));
  }

  onImageUpload = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    // Handle null file
    // Get url of the file and set it to the src of preview
    if (file) {
      this.setState(((prevState) => ({
        ...prevState,
        preview: window.URL.createObjectURL(file),
        file,
      })));
    }
  }

  displayProfileImage = (props) => {
    if (this.state.preview === '') {
      return (
        <img id="preview"
          alt="preview"
          src={(this.props.profile.profileUrl === '') ? 'https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg' : this.props.profile.profileUrl}
        />
      );
    } else {
      return (
        <img id="preview"
          alt="preview"
          src={this.state.preview}
        />
      );
    }
  }

  displayS3 = () => {
    if (this.state.editing) {
      return (
        <div className="imageuploadbundle">
          {this.displayProfileImage()}
          <input type="file"
            name="coverImage"
            title="Choose a picture please"
            onChange={this.onImageUpload}
            id="actual-btn"
            hidden
          />
          <label htmlFor="actual-btn" id="actual-btn">Upload Profile Image</label>

        </div>
      );
    } else {
      return (
        <div>
          {this.displayProfileImage()}
        </div>
      );
    }
  }

  displayInvalidEmail = () => {
    if (this.state.email !== null) {
      if (validator.isEmail(this.state.user.email)) {
        return (
          <div>Email Valid</div>
        );
      } else {
        return (
          <div>Email Invalid</div>
        );
      }
    } else {
      return null;
    }
  }

  changeName = () => {
    this.setState(((prevState) => ({
      ...prevState,
      user: {
        ...this.props.profile,
      },
      editing: true,
    })));
  }

  save = (props) => {
    if (this.state.user.firstName !== '' && this.state.user.lastName !== '' && this.state.user.email !== '' && validator.isEmail(this.state.user.email)) {
      if (this.state.file) {
        uploadImage(this.state.file).then((url) => {
          // use url for content_url and
          // either run your createPost actionCreator
          // or your updatePost actionCreator
          this.setState(((prevState) => ({
            ...prevState,
            user: {
              ...prevState.user,
              profileUrl: url,
            },
          })));
          const profileUrl = url;
          const user = { ...this.state.user, profileUrl };
          this.props.updateUserProfile(user);
        }).catch((error) => {
          console.log('error uploading image to S3:', error.toString());
        });
      }
      this.props.updateUserProfile(this.state.user);
      this.setState({ editing: false });
    }
  }

  displayEmailExistsError = () => {
    if (this.props.autherr === 'Error: Error: Email is in use') {
      return (
        <div>Email already in use! Try another.</div>
      );
    } else {
      return null;
    }
  }

  displayEditable = () => {
    if (this.state.editing || this.props.autherr === 'Error: Error: Email is in use') {
      return (
        <div className="editing">
          {this.displayMissingName()}
          <div className="editingname">
            <div className="col">
              <input className="textbox" type="text" placeholder="First Name" value={this.state.user.firstName} onChange={this.handleFirstName} />
              <span className="focus-bg" />
            </div>
            <br />
            <div className="col">
              <input className="textbox" type="text" placeholder="Last Name" value={this.state.user.lastName} onChange={this.handleLastName} />
              <span className="focus-bg" />
            </div>
          </div>
          <br />
          {this.displayMissingEmail()}
          {this.displayInvalidEmail()}
          <div className="col">
            <input className="textbox emailbox" type="text" placeholder="Email" value={this.state.user.email} onChange={this.handleEmail} />
            <span className="focus-bg" />
          </div>
          {this.displayEmailExistsError()}
          <button className="save-button" type="button" onClick={this.save}>Save Profile</button>
        </div>
      );
    } else {
      return (
        <div className="profile-name-section">
          <div className="profile-name-email">
            <div className="profile-info-name">
              {this.props.profile.firstName} {this.props.profile.lastName}
              <button className="sign-button" type="button" onClick={this.changeName}><FontAwesomeIcon icon={faUserEdit} /></button>
            </div>
            <div className="profile-info-email">{this.props.profile.email}</div>
            <button className="save-button" type="button" onClick={() => { this.props.history.push('/profile'); }}>Back</button>
          </div>
        </div>
      );
    }
  }

  displayMissingName = () => {
    if (this.state.user.firstName === '' || this.state.user.lastName === '') {
      return (
        <div>
          First name and last name must be filled!
        </div>
      );
    } else {
      return null;
    }
  }

  displayMissingEmail = () => {
    if (this.state.user.email === '') {
      return (
        <div>
          Email must be filled!
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="profile-page">

        <div className="profile-user-info">
          <div className="profile-img">
            {this.displayS3()}
          </div>
          <div className="profile-info">
            {this.displayEditable()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.user.profile,
  autherr: state.auth.authError,
});

export default withRouter(connect(mapStateToProps, { getUserProfile, updateUserProfile })(Settings));
