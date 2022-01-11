/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../styles/input_resume_style.scss';
import { fetchPortfolio, updatePortfolio, fetchPortfolios } from '../actions';
import 'regenerator-runtime/runtime';
// import portfolio from './portfolio';

function InputResume(props) {
  const [selectedp, setSelectedp] = useState({ selectedp: 'None' });
  const [name, setName] = useState({ name: '' });
  const [phone, setPhone] = useState({ phone: '' });
  const [email, setEmail] = useState({ email: '' });
  const [role, setRole] = useState({ role: '' });
  const [about, setAbout] = useState({ about: '' });
  const [linkedIn, setLinkedIn] = useState({ linkedIn: '' });

  const [education, setEd] = useState({
    college: '',
    gpa: '',
    degree: '',
    relevantCoursework: '',
  });

  let savedresearch = [{}];
  const [research, setResearch] = useState(savedresearch);

  let savedwork = [{}];
  const [work, setWork] = useState(savedwork);

  let savedprojects = [{}];
  const [projects, setProjects] = useState(savedprojects);

  let savedtechnical = [{}];
  const [technical, setTechnical] = useState(savedtechnical);

  let savedlanguage = [{}];
  const [language, setLanguage] = useState(savedlanguage);

  useEffect(() => {
    if (props.match.params.id) {
      props.fetchPortfolio(props.match.params.id);
      props.fetchPortfolios();
    }
  }, [props.match.params.id]);

  useEffect(() => {
    setSelectedp({ selectedp: props.curr?.name });
    setName({ name: props.curr?.resume?.event?.name?.name });
    setPhone({ phone: props.curr?.resume?.event?.phone?.phone });
    setEmail({ email: props.curr?.resume?.event?.email?.email });
    setRole({ role: props.curr?.resume?.event?.role?.role });
    setAbout({ about: props.curr?.resume?.event?.about?.about });
    setLinkedIn({ linkedIn: props.curr?.resume?.event?.linkedIn?.linkedIn });

    setEd({
      college: props.curr?.resume?.event?.education?.college,
      gpa: props.curr?.resume?.event?.education?.gpa,
      degree: props.curr?.resume?.event?.education?.degree,
      relevantCoursework: props.curr?.resume?.event?.education?.relevantCoursework,
    });

    savedresearch = [];
    for (let i = 0; props.curr?.resume?.event?.research[i] !== undefined; i += 1) {
      savedresearch = [...savedresearch, props.curr?.resume?.event?.research[i]];
    }
    setResearch(savedresearch);

    savedwork = [];
    for (let i = 0; props.curr?.resume?.event?.work[i] !== undefined; i += 1) {
      savedwork = [...savedwork, props.curr?.resume?.event?.work[i]];
    }
    setWork(savedwork);

    savedprojects = [];
    for (let i = 0; props.curr?.resume?.event?.projects[i] !== undefined; i += 1) {
      savedprojects = [...savedprojects, props.curr?.resume?.event?.projects[i]];
    }
    setProjects(savedprojects);

    savedtechnical = [];
    for (let i = 0; props.curr?.resume?.event?.technical[i] !== undefined; i += 1) {
      savedtechnical = [...savedtechnical, props.curr?.resume?.event?.technical[i]];
    }
    setTechnical(savedtechnical);

    savedlanguage = [];
    for (let i = 0; props.curr?.resume?.event?.language[i] !== undefined; i += 1) {
      savedlanguage = [...savedlanguage, props.curr?.resume?.event?.language[i]];
    }
    setLanguage(savedlanguage);
  }, [props.curr]);

  const updateName = (value) => {
    setName({ ...name, name: value });
  };

  const updatePhone = (value) => {
    setPhone({ ...phone, phone: value });
  };

  const updateEmail = (value) => {
    setEmail({ ...email, email: value });
  };

  const updateRole = (value) => {
    setRole({ ...role, role: value });
  };

  const updateAbout = (value) => {
    setAbout({ ...about, about: value });
  };

  const updateLinkedIn = (value) => {
    setLinkedIn({ ...linkedIn, linkedIn: value });
  };

  const updateEduc = (fieldIdx, value) => {
    switch (fieldIdx) {
      case 'college':
        setEd({ ...education, college: value });
        break;
      case 'gpa':
        setEd({ ...education, gpa: value });
        break;
      case 'degree':
        setEd({ ...education, degree: value });
        break;
      case 'relevantCoursework':
        setEd({ ...education, relevantCoursework: value });
        break;
      default:
        // code block
        break;
    }
  };

  const updateResearch = (index, fieldIdx, value) => {
    const temp = research[index];
    switch (fieldIdx) {
      case 'researchlab':
        temp.researchlab = value;
        setResearch([...research.slice(0, index), temp, ...research.slice(index + 1)]);
        break;
      case 'startdate':
        temp.startdate = value;
        setResearch([...research.slice(0, index), temp, ...research.slice(index + 1)]);
        break;
      case 'enddate':
        temp.enddate = value;
        setResearch([...research.slice(0, index), temp, ...research.slice(index + 1)]);
        break;
      case 'position':
        temp.position = value;
        setResearch([...research.slice(0, index), temp, ...research.slice(index + 1)]);
        break;
      case 'description':
        temp.description = value;
        setResearch([...research.slice(0, index), temp, ...research.slice(index + 1)]);
        break;
      default:
        // code block
        break;
    }
  };

  const updateWork = (index, fieldIdx, value) => {
    const temp = work[index];
    switch (fieldIdx) {
      case 'company':
        temp.company = value;
        setWork([...work.slice(0, index), temp, ...work.slice(index + 1)]);
        break;
      case 'startdate':
        temp.startdate = value;
        setWork([...work.slice(0, index), temp, ...work.slice(index + 1)]);
        break;
      case 'enddate':
        temp.enddate = value;
        setWork([...work.slice(0, index), temp, ...work.slice(index + 1)]);
        break;
      case 'position':
        temp.position = value;
        setWork([...work.slice(0, index), temp, ...work.slice(index + 1)]);
        break;
      case 'description':
        temp.description = value;
        setWork([...work.slice(0, index), temp, ...work.slice(index + 1)]);
        break;
      default:
        // code block
        break;
    }
  };

  const updateProjects = (index, fieldIdx, value) => {
    const temp = projects[index];
    switch (fieldIdx) {
      case 'project':
        temp.project = value;
        setProjects([...projects.slice(0, index), temp, ...projects.slice(index + 1)]);
        break;
      case 'startdate':
        temp.startdate = value;
        setProjects([...projects.slice(0, index), temp, ...projects.slice(index + 1)]);
        break;
      case 'enddate':
        temp.enddate = value;
        setProjects([...projects.slice(0, index), temp, ...projects.slice(index + 1)]);
        break;
      case 'description':
        temp.description = value;
        setProjects([...projects.slice(0, index), temp, ...projects.slice(index + 1)]);
        break;
      default:
        // code block
        break;
    }
  };

  const updateTechnical = (index, value) => {
    const temp = technical[index];
    temp.technical = value;
    setTechnical([...technical.slice(0, index), temp, ...technical.slice(index + 1)]);
  };

  const updateLanguage = (index, value) => {
    const temp = language[index];
    temp.language = value;
    setLanguage([...language.slice(0, index), temp, ...language.slice(index + 1)]);
  };

  const getFolio = async (id) => {
    props.fetchPortfolio(id);
  };

  const selected = (pname) => {
    setSelectedp({ selectedp: pname });
  };

  const folioOptions = () => {
    let folios = 'No Portfolios Available';
    if (Object.keys(props.all).length !== 0) {
      const fs = props.all.map((pfolio, index) => {
        return (
          <button key={index} type="button" className="dropdown-item" onClick={() => { getFolio(pfolio._id); selected(pfolio.name); }}>
            {pfolio.name}
          </button>
        );
      });
      folios = (
        <div className="dropdown" id="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Portfolios
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            {fs}
          </div>
        </div>
      );
    }
    return (
      folios
    );
  };

  const nameerror = () => {
    if (name.name === undefined || name.name === '') {
      return (
        <div className="emessage">* Required Field: Please include your name</div>
      );
    } else {
      return (
        null
      );
    }
  };

  const phoneerror = () => {
    if (phone.phone === undefined || phone.phone === '') {
      return (
        <div className="emessage">* Required Field: Please include your phone number</div>
      );
    } else {
      return (
        null
      );
    }
  };

  const emailerror = () => {
    if (email.email === undefined || email.email === '') {
      return (
        <div className="emessage">* Required Field: Please include your email</div>
      );
    } else {
      return (
        null
      );
    }
  };

  const roleerror = () => {
    if (role.role === undefined || role.role === '') {
      return (
        <div className="emessage">* Required Field: Please include your current role</div>
      );
    } else {
      return (
        null
      );
    }
  };

  const abouterror = () => {
    if (about.about === undefined || about.about === '') {
      return (
        <div className="emessage">* Required Field: Please tell us about yourself</div>
      );
    } else {
      return (
        null
      );
    }
  };

  const collegeerror = () => {
    if (education.college === undefined || education.college === '') {
      return (
        <div className="emessage">* Required Field: Please include your college</div>
      );
    } else {
      return (
        null
      );
    }
  };

  const degreeerror = () => {
    if (education.degree === undefined || education.degree === '') {
      return (
        <div className="emessage">* Required Field: Please include your degree</div>
      );
    } else {
      return (
        null
      );
    }
  };

  const researcherror = () => {
    if (Object.keys(research).length !== 0) {
      for (let i = 0; research[i] !== undefined; i += 1) {
        if (research[i].researchlab === '') {
          return (
            <div className="emessage">Please fill in all the information for each research field</div>
          );
        } else if (research[i].startdate === '') {
          return (
            <div className="emessage">Please fill in all the information for each research field</div>
          );
        } else if (research[i].enddate === '') {
          return (
            <div className="emessage">Please fill in all the information for each research field</div>
          );
        } else if (research[i].position === '') {
          return (
            <div className="emessage">Please fill in all the information for each research field</div>
          );
        } else if (research[i].description === '') {
          return (
            <div className="emessage">Please fill in all the information for each research field</div>
          );
        }
      }
      return (
        null
      );
    }
    return (
      null
    );
  };

  const workerror = () => {
    if (Object.keys(work).length !== 0) {
      for (let i = 0; work[i] !== undefined; i += 1) {
        if (work[i].company === '') {
          return (
            <div className="emessage">Please fill in all the information for each work experience</div>
          );
        } else if (work[i].startdate === '') {
          return (
            <div className="emessage">Please fill in all the information for each work experience</div>
          );
        } else if (work[i].enddate === '') {
          return (
            <div className="emessage">Please fill in all the information for each work experience</div>
          );
        } else if (work[i].position === '') {
          return (
            <div className="emessage">Please fill in all the information for each work experience</div>
          );
        } else if (work[i].description === '') {
          return (
            <div className="emessage">Please fill in all the information for each work experience</div>
          );
        }
      }
      return (
        null
      );
    }
    return (
      null
    );
  };

  const projecterror = () => {
    if (Object.keys(projects).length !== 0) {
      for (let i = 0; projects[i] !== undefined; i += 1) {
        if (projects[i].project === '') {
          return (
            <div className="emessage">Please fill in all the information for each project</div>
          );
        } else if (projects[i].startdate === '') {
          return (
            <div className="emessage">Please fill in all the information for each project</div>
          );
        } else if (projects[i].enddate === '') {
          return (
            <div className="emessage">Please fill in all the information for each project</div>
          );
        } else if (projects[i].description === '') {
          return (
            <div className="emessage">Please fill in all the information for each project</div>
          );
        }
      }
      return (
        null
      );
    }
    return (
      null
    );
  };

  const technicalerror = () => {
    if (Object.keys(technical).length !== 0) {
      for (let i = 0; technical[i] !== undefined; i += 1) {
        if (technical[i].technical === '') {
          return (
            <div className="emessage">Please fill in all the information for each technical skill added</div>
          );
        }
      }
      return (
        null
      );
    }
    return (
      null
    );
  };

  const languageerror = () => {
    if (Object.keys(language).length !== 0) {
      for (let i = 0; language[i] !== undefined; i += 1) {
        if (language[i].language === '') {
          return (
            <div className="emessage">Please fill in all the information for each language added</div>
          );
        }
      }
      return (
        null
      );
    }
    return (
      null
    );
  };

  const handleErrors = () => {
    let noerrors = true;

    if (nameerror() !== null) {
      noerrors = false;
    }
    if (phoneerror() !== null) {
      noerrors = false;
    }
    if (emailerror() !== null) {
      noerrors = false;
    }
    if (roleerror() !== null) {
      noerrors = false;
    }
    if (abouterror() !== null) {
      noerrors = false;
    }
    if (collegeerror() !== null) {
      noerrors = false;
    }
    if (degreeerror() !== null) {
      noerrors = false;
    }
    if (researcherror() !== null) {
      noerrors = false;
    }
    if (workerror() !== null) {
      noerrors = false;
    }
    if (projecterror() !== null) {
      noerrors = false;
    }
    if (technicalerror() !== null) {
      noerrors = false;
    }
    if (languageerror() !== null) {
      noerrors = false;
    }

    return (
      noerrors
    );
  };

  const submitform = async () => {
    const event = {
      name,
      phone,
      email,
      role,
      about,
      linkedIn,
      education,
      research,
      work,
      projects,
      technical,
      language,
    };
    if (handleErrors() === true) {
      await props.updatePortfolio(props.match.params.id, {
        resume: {
          event,
        },
      });
      console.log(event);
      props.history.push(`/portfolios/edit/style/${props.match.params.id}`);
    }
  };

  const leaveform = () => {
    props.history.push('/portfolios');
  };

  return (
    <div>
      <form>
        <h1 className="title">Resume Information</h1><br /><br /><br />
        <div>
          <h2 id="inputheader">Autofill with Existing Portfolio</h2>
          {folioOptions()}
          <p id="selectedp">Selected: {selectedp.selectedp}</p>
        </div><br /><br />

        <div>
          <h2 id="inputheader">General Information</h2>
          <input placeholder="Name" id="resumeinput" className="name" value={name.name} onChange={(event) => { updateName(event.target.value); }} />
          {nameerror()}
          <input placeholder="Phone" id="resumeinput" className="phone" value={phone.phone} onChange={(event) => { updatePhone(event.target.value); }} />
          {phoneerror()}
          <input placeholder="Email" id="resumeinput" className="email" value={email.email} onChange={(event) => { updateEmail(event.target.value); }} />
          {emailerror()}
          <input placeholder="Current Role" id="resumeinput" className="currentrole" value={role.role} onChange={(event) => { updateRole(event.target.value); }} />
          {roleerror()}
          <textarea placeholder="Please describe yourself" row="6" id="bigtext" className="about" value={about.about} onChange={(event) => { updateAbout(event.target.value); }} />
          {abouterror()}
          <input placeholder="LinkedIn" id="resumeinput" className="linkedIn" value={linkedIn.linkedIn} onChange={(event) => { updateLinkedIn(event.target.value); }} />
        </div><br /><br /><br />

        <div className="Education">
          <h2 id="inputheader">Education</h2>
          <div className="college">
            <input placeholder="College or University" id="resumeinput" className="college" value={education.college} onChange={(event) => { updateEduc('college', event.target.value); }} />
            {collegeerror()}
            <input placeholder="GPA /4.00" id="resumeinput" className="gpa" value={education.gpa} onChange={(event) => { updateEduc('gpa', event.target.value); }} />
            <input placeholder="Degree" id="resumeinput" className="degree" value={education.degree} onChange={(event) => { updateEduc('degree', event.target.value); }} />
            {degreeerror()}
            <input placeholder="Relevant Coursework" id="resumeinput" className="relevantCoursework" value={education.relevantCoursework} onChange={(event) => { updateEduc('relevantCoursework', event.target.value); }} />
          </div>
        </div><br /><br /><br />

        <div className="Research">
          <div className="section-title">
            <h2 id="inputheader">Research</h2>
          </div>
          {research.map((object, index) => {
            return (
              <li key={index}>
                <i className="material-icons" onClick={() => { setResearch([...research.slice(0, index), ...research.slice(index + 1)]); }}>clear</i>
                <input placeholder="Research Lab" id="resumeinput" name="researchlab" className="researchlab" value={research[index].researchlab} onChange={(event) => { updateResearch(index, 'researchlab', event.target.value); }} />
                <input placeholder="Start Date" id="resumeinput" className="text-input" value={research[index].startdate} onChange={(event) => { updateResearch(index, 'startdate', event.target.value); }} />
                <input placeholder="End Date" id="resumeinput" className="text-input" value={research[index].enddate} onChange={(event) => { updateResearch(index, 'enddate', event.target.value); }} />
                <input placeholder="Position" id="resumeinput" className="text-input" value={research[index].position} onChange={(event) => { updateResearch(index, 'position', event.target.value); }} />
                <textarea placeholder="Description" row="6" id="bigtext" className="text-input" value={research[index].description} onChange={(event) => { updateResearch(index, 'description', event.target.value); }} />
              </li>
            );
          })}
          <i className="material-icons"
            onClick={() => {
              setResearch([...research, {
                researchlab: '', startdate: '', enddate: '', position: '', description: '',
              }]);
            }}
            id="inputbutton"
          >add_circle
          </i>
        </div>
        {researcherror()}<br /><br /><br />

        <div className="Work">
          <div className="section-title">
            <h2 id="inputheader">Work Experience</h2>
          </div>
          {work.map((object, index) => {
            return (
              <li key={index}>
                <i className="material-icons" onClick={() => { setWork([...work.slice(0, index), ...work.slice(index + 1)]); }}>clear</i>
                <input placeholder="Company Name" id="resumeinput" name="company" className="company" value={work[index].company} onChange={(event) => { updateWork(index, 'company', event.target.value); }} />
                <input placeholder="Start Date" id="resumeinput" className="text-input" value={work[index].startdate} onChange={(event) => { updateWork(index, 'startdate', event.target.value); }} />
                <input placeholder="End Date" id="resumeinput" className="text-input" value={work[index].enddate} onChange={(event) => { updateWork(index, 'enddate', event.target.value); }} />
                <input placeholder="Position" id="resumeinput" className="text-input" value={work[index].position} onChange={(event) => { updateWork(index, 'position', event.target.value); }} />
                <textarea placeholder="Description" row="6" id="bigtext" className="text-input" value={work[index].description} onChange={(event) => { updateWork(index, 'description', event.target.value); }} />
              </li>
            );
          })}
          <i className="material-icons"
            onClick={() => {
              setWork([...work, {
                company: '', startdate: '', enddate: '', position: '', description: '',
              }]);
            }}
            id="inputbutton"
          >add_circle
          </i>
        </div>
        {workerror()}<br /><br /><br />

        <div className="Projects">
          <div className="section-title">
            <h2 id="inputheader">Projects</h2>
          </div>
          {projects.map((object, index) => {
            return (
              <li key={index}>
                <i className="material-icons" onClick={() => { setProjects([...projects.slice(0, index), ...projects.slice(index + 1)]); }}>clear</i>
                <input placeholder="Project" id="resumeinput" name="project" className="projects" value={projects[index].project} onChange={(event) => { updateProjects(index, 'project', event.target.value); }} />
                <input placeholder="Start Date" id="resumeinput" className="text-input" value={projects[index].startdate} onChange={(event) => { updateProjects(index, 'startdate', event.target.value); }} />
                <input placeholder="End Date" id="resumeinput" className="text-input" value={projects[index].enddate} onChange={(event) => { updateProjects(index, 'enddate', event.target.value); }} />
                <textarea placeholder="Description" row="6" id="bigtext" className="text-input" value={projects[index].description} onChange={(event) => { updateProjects(index, 'description', event.target.value); }} />
                {/* <input type="file" name="coverImage" title="Choose a video please" onChange={onImageUpload} /> */}
              </li>
            );
          })}
          <i className="material-icons"
            onClick={() => {
              setProjects([...projects, {
                project: '', startdate: '', enddate: '', description: '',
              }]);
            }}
            id="inputbutton"
          >add_circle
          </i>
        </div>
        {projecterror()}<br /><br /><br />

        <div className="technical">
          <div className="section-title">
            <h2 id="inputheader">Technical Skills</h2>
          </div>
          {technical.map((object, index) => {
            return (
              <li key={index}>
                <i className="material-icons" onClick={() => { setTechnical([...technical.slice(0, index), ...technical.slice(index + 1)]); }}>clear</i>
                <input placeholder="Technical Skill" id="resumeinput" name="technical" className="technical" value={technical[index].technical} onChange={(event) => { updateTechnical(index, event.target.value); }} />
              </li>
            );
          })}
          <i className="material-icons"
            onClick={() => {
              setTechnical([...technical, {
                technical: '',
              }]);
            }}
            id="inputbutton"
          >add_circle
          </i>
        </div>
        {technicalerror()}<br /><br /><br />

        <div className="language">
          <div className="section-title">
            <h2 id="inputheader">Languages</h2>
          </div>
          {language.map((object, index) => {
            return (
              <li key={index}>
                <i className="material-icons" onClick={() => { setLanguage([...language.slice(0, index), ...language.slice(index + 1)]); }}>clear</i>
                <input placeholder="Language" id="resumeinput" name="language" className="language" value={language[index].language} onChange={(event) => { updateLanguage(index, event.target.value); }} />
              </li>
            );
          })}
          <i className="material-icons"
            onClick={() => {
              setLanguage([...language, {
                language: '',
              }]);
            }}
            id="inputbutton"
          >add_circle
          </i>
        </div>
        {languageerror()}<br /><br /><br />

        <button type="button" id="sub" onClick={() => { submitform(); }}>Submit</button><br />
        <button type="button" id="leave" onClick={() => { leaveform(); }}>Cancel</button><br />
      </form>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    all: reduxState.portfolio.all,
    curr: reduxState.portfolio.current,
  };
}
export default connect(mapStateToProps, { fetchPortfolio, updatePortfolio, fetchPortfolios })(InputResume);
