/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPortfolio, getUserProfile } from '../actions';
import '../styles/portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = (props) => {
    this.props.fetchPortfolio(this.props.match.params.id);
    this.props.getUserProfile();
  }

  render() {
    const headerrolestyle = {
      backgroundColor: this.props.curr.header?.role.backgroundColor,
      color: this.props.curr.header?.role.color,
      display: this.props.curr.header?.role.display,
      flexDirection: this.props.curr.header?.role.flexDirection,
      fontFamily: this.props.curr.header?.role.font,
      fontSize: this.props.curr.header?.role.fontSize,
      justifyContent: this.props.curr.header?.role.justifyContent,
      weight: this.props.curr.header?.role.weight,
      textAlign: this.props.curr.header?.role.textAlign,
    };

    const headerusernamestyle = {
      backgroundColor: this.props.curr.header?.userName.backgroundColor,
      color: this.props.curr.header?.userName.color,
      display: this.props.curr.header?.userName.display,
      flexDirection: this.props.curr.header?.userName.flexDirection,
      fontFamily: this.props.curr.header?.userName.font,
      fontSize: this.props.curr.header?.userName.fontSize,
      justifyContent: this.props.curr.header?.userName.justifyContent,
      weight: this.props.curr.header?.userName.weight,
      textAlign: this.props.curr.header?.userName.textAlign,
      fontWeight: this.props.curr.header?.userName.fontWeight,
    };

    const aboutmestyle = {
      backgroundColor: this.props.curr.aboutMe?.backgroundColor,
      color: this.props.curr.aboutMe?.color,
      display: this.props.curr.aboutMe?.display,
      flexDirection: this.props.curr.aboutMe?.flexDirection,
      fontFamily: this.props.curr.aboutMe?.font,
      fontSize: this.props.curr.aboutMe?.fontSize,
      justifyContent: this.props.curr.aboutMe?.justifyContent,
      padding: this.props.curr.aboutMe?.padding,
    };

    const projectstyle = {
      backgroundColor: this.props.curr.projects?.backgroundColor,
      color: this.props.curr.projects?.color,
      display: this.props.curr.projects?.display,
      flexDirection: this.props.curr.projects?.flexDirection,
      fontFamily: this.props.curr.projects?.font,
      fontSize: this.props.curr.projects?.fontSize,
      justifyContent: this.props.curr.projects?.justifyContent,
      padding: this.props.curr.projects?.padding,
    };

    const contactstyle = {
      backgroundColor: this.props.curr.contactMe?.backgroundColor,
      color: this.props.curr.contactMe?.color,
      display: this.props.curr.contactMe?.display,
      flexDirection: this.props.curr.contactMe?.flexDirection,
      fontFamily: this.props.curr.contactMe?.font,
      fontSize: this.props.curr.contactMe?.fontSize,
      justifyContent: this.props.curr.contactMe?.justifyContent,
      padding: this.props.curr.contactMe?.padding,
    };

    const headerpadding = {
      padding: this.props.curr.header?.role.padding,
    };

    const bodycolor = {
      backgroundColor: this.props.curr.header?.userName.backgroundColor,
    };

    const bolder = {
      fontWeight: 'bold',
      fontSize: '1.5em',
    };

    const border = {
      borderBottom: 'solid',
    };

    const aboutstyle = {
      display: 'flex',
      flexDirection: 'column',
    };
    const aboutimagestyle = {
      width: '20vw',
      minWidth: '300px',
      height: 'auto',
      borderRadius: '10px',
      margin: 'auto',
    };

    if (Object.keys(this.props.curr).length === 0) {
      return null;
    } else {
      let projs = [];
      for (let i = 0; this.props.curr.resume?.event?.projects[i] !== undefined; i += 1) {
        projs = [...projs, this.props.curr.resume?.event?.projects[i]];
      }

      let res = [];
      for (let i = 0; this.props.curr.resume?.event?.research[i] !== undefined; i += 1) {
        res = [...res, this.props.curr.resume?.event?.research[i]];
      }

      let work = [];
      for (let i = 0; this.props.curr.resume?.event?.work[i] !== undefined; i += 1) {
        work = [...work, this.props.curr.resume?.event?.work[i]];
      }

      let technical = [];
      for (let i = 0; this.props.curr.resume?.event?.technical[i] !== undefined; i += 1) {
        technical = [...technical, this.props.curr.resume?.event?.technical[i]];
      }

      let language = [];
      for (let i = 0; this.props.curr.resume?.event?.language[i] !== undefined; i += 1) {
        language = [...language, this.props.curr.resume?.event?.language[i]];
      }

      let LINKEDIN = null;
      if (this.props.curr.resume?.event?.linkedIn.linkedIn !== undefined && this.props.curr.resume?.event?.linkedIn.linkedIn !== '') {
        LINKEDIN = <p>LinkedIn: {this.props.curr.resume?.event?.linkedIn.linkedIn}</p>;
      }

      let GPA = null;
      if (this.props.curr.resume?.event?.education.gpa !== undefined && this.props.curr.resume?.event?.education.gpa !== '') {
        GPA = <p>GPA: {this.props.curr.resume.event.education.gpa}</p>;
      }

      let RELEVANT = null;
      if (this.props.curr.resume?.event?.education.relevantCoursework !== undefined && this.props.curr.resume?.event?.education.relevantCoursework !== '') {
        RELEVANT = <p>Relevant Coursework: {this.props.curr.resume.event.education.relevantCoursework}</p>;
      }

      let RESEARCH = null;
      if (Object.keys(res).length !== 0) {
        RESEARCH = (
          <div className="research" style={aboutmestyle}>
            <p style={bolder}>Research</p><br />
            {res.map((research, index) => {
              return (
                <li key={index}>
                  <p style={border}>{research.researchlab}</p>
                  <p>{research.startdate} - {research.enddate}</p>
                  <p>{research.position}</p>
                  <p>{research.description}</p><br />
                </li>
              );
            })}
          </div>
        );
      }

      let PROJECTS = null;
      if (Object.keys(projs).length !== 0) {
        PROJECTS = (
          <div className="projects" style={projectstyle}>
            <p style={bolder}>Projects</p><br />
            {projs.map((project, index) => {
              return (
                <li key={index}>
                  <p style={border}>{project.project}</p>
                  <p>{project.startdate} - {project.enddate}</p>
                  <p>{project.description}</p><br />
                </li>
              );
            })}
          </div>
        );
      }

      let WORK = null;
      if (Object.keys(work).length !== 0) {
        WORK = (
          <div className="work" style={aboutmestyle}>
            <p style={bolder}>Work Experience</p><br />
            {work.map((w, index) => {
              return (
                <li key={index}>
                  <p style={border}>{w.company}</p>
                  <p>{w.startdate} - {w.enddate}</p>
                  <p>{w.position}</p>
                  <p>{w.description}</p><br />
                </li>
              );
            })}
          </div>
        );
      }

      let TECHNICAL = null;
      if (Object.keys(technical).length !== 0) {
        TECHNICAL = (
          <div className="technical skills" style={projectstyle}>
            <p style={bolder}>Technical Skills</p><br />
            {technical.map((t, index) => {
              return (
                <li key={index}>
                  <p>{t.technical}</p>
                </li>
              );
            })}
          </div>
        );
      }

      let LANGUAGES = null;
      if (Object.keys(language).length !== 0) {
        LANGUAGES = (
          <div className="languages" style={aboutmestyle}>
            <p style={bolder}>Languages</p><br />
            {language.map((l, index) => {
              return (
                <li key={index}>
                  <p>{l.language}</p>
                </li>
              );
            })}
          </div>
        );
      }

      return (
        <div className="portfoliorender" style={bodycolor}>
          <div className="header" style={headerpadding}>
            <h1 style={headerusernamestyle}>{this.props.curr.resume?.event?.name.name}</h1>
            <h2 style={headerrolestyle}>{this.props.curr.resume?.event?.role.role}</h2>
          </div>
          <div className="aboutme" style={aboutmestyle}>
            <div style={aboutstyle}>
              <img src={(this.props.user.profileUrl === '') ? 'https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg' : this.props.user.profileUrl} style={aboutimagestyle} alt="aboutimage" /><br />
              <div>
                <p style={bolder}>About Me</p><br />
                <p>{this.props.curr.resume?.event?.about.about}</p>
              </div>
            </div>
          </div>
          <div className="education" style={projectstyle}>
            <p style={bolder}>Education</p><br />
            <p>{this.props.curr.resume.event.education.college}</p>
            <p>{this.props.curr.resume.event.education.degree}</p>
            {GPA}
            {RELEVANT}
          </div>
          {RESEARCH}
          {PROJECTS}
          {WORK}
          {TECHNICAL}
          {LANGUAGES}
          <div className="contactme" style={contactstyle}>
            <p style={bolder}>Contact Me</p><br />
            <p>Phone: {this.props.curr.resume?.event?.phone.phone}</p>
            <p>Email: {this.props.curr.resume?.event?.email.email}</p>
            {LINKEDIN}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (reduxState) => ({
  curr: reduxState.portfolio.current,
  user: reduxState.user.profile,
});

export default withRouter(connect(mapStateToProps, { fetchPortfolio, getUserProfile })(Portfolio));
