/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import validateColor from 'validate-color';
import FontPicker from 'font-picker-react';
import { SketchPicker } from 'react-color';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft, faChevronRight, faEdit, faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import inColumns from '@iconify-icons/si-glyph/in-columns';
import sharpTableRows from '@iconify-icons/ic/sharp-table-rows';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { fetchPortfolio, updatePortfolio } from '../actions';

import '../styles/customize-page.scss';

function customize(props) {
  const portfolio = props.curr;

  const [isEditing, setIsEditing] = useState(false);
  const [currentSlide, setSlide] = useState(1);

  const [name, setName] = useState('');

  const [userNameColor, setUserNameColor] = useState('');
  const [userNameBgColor, setUserNameBgColor] = useState('');
  const [userNameFont, setUserNameFont] = useState('');
  const [userNameFontSize, setUserNameFontSize] = useState('');

  const [roleColor, setRoleColor] = useState('');
  const [roleBgColor, setRoleBgColor] = useState('');
  const [roleFont, setRoleFont] = useState('');
  const [roleFontSize, setRoleFontSize] = useState('');

  const [aboutmeColor, setAboutmeColor] = useState('');
  const [aboutmeBgColor, setAboutmeBgColor] = useState('');
  const [aboutmeFont, setAboutmeFont] = useState('');
  const [aboutmeFontSize, setAboutmeFontSize] = useState('');

  const [projectsColor, setProjectsColor] = useState('');
  const [projectsBgColor, setProjectsBgColor] = useState('');
  const [projectsFont, setProjectsFont] = useState('');
  const [projectsFontSize, setProjectsFontSize] = useState('');
  const [projectsDir, setProjectsDir] = useState('row');

  const [contactmeColor, setContactmeColor] = useState('');
  const [contactmeBgColor, setContactmeBgColor] = useState('');
  const [contactmeFont, setContactmeFont] = useState('');
  const [contactmeFontSize, setContactmeFontSize] = useState('');

  const onChangeHandler = (setter) => (e) => setter(e.target.value);
  const onChangeHandlerColor = (setter) => (e) => (validateColor(e.target.value) ? setter(e.target.value) : setter('white'));
  const onChangeHandlerFont = (setter, font) => setter(font);
  const onChangeHandlerColorPicker = (setter, color) => setter(color);
  const onChangeHandlerDir = (setter) => (e, dir) => setter(dir);

  const forwardSlide = () => {
    if (currentSlide < 5) {
      setSlide(currentSlide + 1);
    } else {
      setSlide(1);
    }
  };

  const backSlide = () => {
    if (currentSlide > 1) {
      setSlide(currentSlide - 1);
    } else {
      setSlide(5);
    }
  };

  const renderSlide = () => {
    if (currentSlide == 1) {
      return (
        <div className="custom_section">
          <h3>Username Section</h3>
          <div className="mainbody-overall">
            <div className="mainbody">
              <p>Background color: {portfolio.header?.userName.backgroundColor} </p>
              <p>Font Color: {portfolio.header?.userName.color} </p>
              <p>Font: {portfolio.header?.userName.font} </p>
              <p>Font Size: {portfolio.header?.userName.fontSize} </p>
              <p>Justify Content: {portfolio.header?.userName.justifyContent} </p>
            </div>
            <div className="mainbody-preview">
              <div className="preview-section" style={{ backgroundColor: userNameBgColor }}>
                <div><p className="apply-font" style={{ fontSize: userNameFontSize, color: userNameColor, font: userNameFont }}>~Font preview~</p></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentSlide == 2) {
      return (
        <div className="custom_section">
          <h3>Job Title</h3>
          <div className="mainbody-overall">
            <div className="mainbody">
              <p>Background color: {portfolio.header?.role.backgroundColor} </p>
              <p>Font Color: {portfolio.header?.role.color} </p>
              <p>Font: {portfolio.header?.role.font} </p>
              <p>Font Size: {portfolio.header?.role.fontSize} </p>
              <p>Justify Content: {portfolio.header?.role.justifyContent} </p>
            </div>
            <div className="mainbody-preview">
              <div className="preview-section" style={{ backgroundColor: roleBgColor }}>
                <p className="apply-font" style={{ fontSize: roleFontSize, color: roleColor, font: roleFont }}>~Font preview~</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentSlide == 3) {
      return (
        <div className="custom_section">
          <h3>About Me/Research/Work/Languages</h3>
          <div className="mainbody-overall">
            <div className="mainbody">
              <p>Background color: {portfolio.aboutMe?.backgroundColor} </p>
              <p>Font Color: {portfolio.aboutMe?.color} </p>
              <p>Font: {portfolio.aboutMe?.font} </p>
              <p>Font Size: {portfolio.aboutMe?.fontSize} </p>
              <p>Justify Content: {portfolio.aboutMe?.justifyContent} </p>
            </div>
            <div className="mainbody-preview">
              <div className="preview-section" style={{ backgroundColor: aboutmeBgColor }}>
                <p className="apply-font" style={{ fontSize: aboutmeFontSize, color: aboutmeColor, font: aboutmeFont }}>~Font preview~</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentSlide == 4) {
      return (
        <div className="custom_section">
          <h3>Projects/Technical/Education</h3>
          <div className="mainbody-overall">
            <div className="mainbody">
              <p>Background color: {portfolio.projects?.backgroundColor} </p>
              <p>Font Color: {portfolio.projects?.color} </p>
              <p>Font: {portfolio.projects?.font} </p>
              <p>Font Size: {portfolio.projects?.fontSize} </p>
              <p>Justify Content: {portfolio.projects?.justifyContent} </p>
              <p>Orientation: {portfolio.projects?.flexDirection}</p>
            </div>
            <div className="mainbody-preview">
              <div className="preview-section" style={{ backgroundColor: projectsBgColor }}>
                <p className="apply-font" style={{ fontSize: projectsFontSize, color: projectsColor, font: projectsFont }}>~Font preview~</p>

              </div>
            </div>
          </div>
        </div>
      );
    }
    if (currentSlide == 5) {
      return (
        <div className="custom_section">
          <h3>Contact Me</h3>
          <div className="mainbody-overall">
            <div className="mainbody">
              <p>Background color: {portfolio.contactMe?.backgroundColor} </p>
              <p>Font Color: {portfolio.contactMe?.color} </p>
              <p>Font: {portfolio.contactMe?.font} </p>
              <p>Font Size: {portfolio.contactMe?.fontSize} </p>
              <p>Justify Content: {portfolio.contactMe?.justifyContent} </p>
            </div>
            <div className="mainbody-preview">
              <div className="preview-section" style={{ backgroundColor: contactmeBgColor }}>
                <p className="apply-font" style={{ fontSize: contactmeFontSize, color: contactmeColor, font: contactmeFont }}>~Font preview~</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (<div />);
  };

  const renderEditingSlides = () => {
    if (currentSlide == 1) {
      return (
        <div className="custom_section">
          <h3>Username Section</h3>
          <div className="colorpickers">
            <div className="colorsections">
              <p>Background color:</p>
              <input onChange={onChangeHandler(setUserNameBgColor)} value={userNameBgColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setUserNameBgColor, color.hex)}
                color={userNameBgColor}
              />
            </div>
            <div className="colorsections">
              <p>Font color:</p>
              <input onChange={onChangeHandler(setUserNameColor)} value={userNameColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setUserNameColor, color.hex)}
                color={userNameColor}
              />
            </div>
          </div>
          <div className="fontpickers">
            <div className="fontsections">
              <p>Font Size: <input type="number" onChange={onChangeHandler(setUserNameFontSize)} value={userNameFontSize} />
              </p>
            </div>
            <div className="fontsections">
              <p>
                Font:
                <div>
                  <FontPicker
                    apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
                    activeFontFamily={userNameFont}
                    onChange={(nextFont) => onChangeHandlerFont(setUserNameFont, nextFont.family)}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="preview-section" style={{ backgroundColor: userNameBgColor }}>
            <p className="apply-font" style={{ fontSize: `${userNameFontSize}em`, color: userNameColor }}>~Font preview~</p>
          </div>
        </div>
      );
    }
    if (currentSlide == 2) {
      return (
        <div className="custom_section">
          <h3>Job title</h3>
          <div className="colorpickers">
            <div className="colorsections">
              <p>Background color:</p>
              <input onChange={onChangeHandler(setRoleBgColor)} value={roleBgColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setRoleBgColor, color.hex)}
                color={roleBgColor}
              />
            </div>
            <div className="colorsections">
              <p>Font color: </p>
              <input onChange={onChangeHandler(setRoleColor)} value={roleColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setRoleColor, color.hex)}
                color={roleColor}
              />
            </div>
          </div>
          <div className="fontpickers">
            <div className="fontsections">
              <p>Font Size:
                <input type="number" onChange={onChangeHandler(setRoleFontSize)} value={roleFontSize} />
              </p>
            </div>
            <div className="fontsections">
              <p>Font:
                <div>
                  <FontPicker
                    apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
                    activeFontFamily={roleFont}
                    onChange={(nextFont) => onChangeHandlerFont(setRoleFont, nextFont.family)}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="preview-section" style={{ backgroundColor: roleBgColor }}>
            <p className="apply-font" style={{ fontSize: `${roleFontSize}em`, color: roleColor }}>~Font preview~</p>
          </div>
        </div>
      );
    }
    if (currentSlide == 3) {
      return (
        <div className="custom_section">
          <h3>About Me/Research/Work/Languages</h3>
          <div className="colorpickers">
            <div className="colorsections">
              <p>Background color:</p>
              <input onChange={onChangeHandler(setAboutmeBgColor)} value={aboutmeBgColor} onBlur={onChangeHandlerColor(setUserNameColor)} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setAboutmeBgColor, color.hex)}
                color={aboutmeBgColor}
              />
            </div>
            <div className="colorsections">
              <p>Font color: </p>
              <input onChange={onChangeHandler(setAboutmeColor)} value={aboutmeColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setAboutmeColor, color.hex)}
                color={aboutmeColor}
              />
            </div>
          </div>
          <div className="fontpickers">
            <div className="fontsections">
              <p>Font Size:
                <input type="number" onChange={onChangeHandler(setAboutmeFontSize)} value={aboutmeFontSize} />
              </p>
            </div>
            <div className="fontsections">
              <p>Font:
                <div>
                  <FontPicker
                    apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
                    activeFontFamily={aboutmeFont}
                    onChange={(nextFont) => onChangeHandlerFont(setAboutmeFont, nextFont.family)}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="preview-section" style={{ backgroundColor: aboutmeBgColor }}>
            <p className="apply-font" style={{ fontSize: `${aboutmeFontSize}em`, color: aboutmeColor }}>~Font preview~</p>
          </div>
        </div>
      );
    }
    if (currentSlide == 4) {
      return (
        <div className="custom_section">
          <h3>Projects/Technical/Education</h3>
          <div className="colorpickers">
            <div className="colorsections">
              <p>Background color:</p>
              <input onChange={onChangeHandler(setProjectsBgColor)} value={projectsBgColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setProjectsBgColor, color.hex)}
                color={projectsBgColor}
              />
            </div>
            <div className="colorsections">
              <p>Font color: </p>
              <input onChange={onChangeHandler(setProjectsColor)} value={projectsColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setProjectsColor, color.hex)}
                color={projectsColor}
              />
            </div>
          </div>
          <div className="fontpickers">
            <div className="fontsections">
              <p>Font Size:
                <input type="number" onChange={onChangeHandler(setProjectsFontSize)} value={projectsFontSize} />
              </p>
            </div>
            <div className="fontsections">
              <p>Font:
                <div>
                  <FontPicker
                    apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
                    activeFontFamily={projectsFont}
                    onChange={(nextFont) => onChangeHandlerFont(setProjectsFont, nextFont.family)}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="preview-section" style={{ backgroundColor: projectsBgColor }}>
            <p className="apply-font" style={{ fontSize: `${projectsFontSize}em`, color: projectsColor }}>~Font preview~</p>
          </div>
          <p>Row or Column:
            <input onChange={onChangeHandler(setProjectsDir)} value={projectsDir} />
          </p>
          <div>
            <ToggleButtonGroup
              value={projectsDir}
              exclusive
              onChange={onChangeHandlerDir(setProjectsDir)}
              aria-label="text alignment"
            >
              <ToggleButton value="row" aria-label="row">
                <Icon icon={sharpTableRows} />
              </ToggleButton>
              <ToggleButton value="column" aria-label="column">
                <Icon icon={inColumns} />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      );
    }
    if (currentSlide == 5) {
      return (
        <div className="custom_section">
          <h3>Contact Me</h3>
          <div className="colorpickers">
            <div className="colorsections">
              <p>Background color:</p>
              <input onChange={onChangeHandler(setContactmeBgColor)} value={contactmeBgColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setContactmeBgColor, color.hex)}
                color={contactmeBgColor}
              />
            </div>
            <div className="colorsections">
              <p>Font color: </p>
              <input onChange={onChangeHandler(setContactmeColor)} value={contactmeColor} />
              <SketchPicker
                onChange={(color) => onChangeHandlerColorPicker(setContactmeColor, color.hex)}
                color={contactmeColor}
              />
            </div>
          </div>
          <div className="fontpickers">
            <div className="fontsections">
              <p>Font Size:
                <input type="number" onChange={onChangeHandler(setContactmeFontSize)} value={contactmeFontSize} />
              </p>
            </div>
            <div className="fontsections">
              <p>Font:
                <div>
                  <FontPicker
                    apiKey="AIzaSyC4DvoDwyiylUaTcYuKr-U6Ccy8f1SR8mo"
                    activeFontFamily={contactmeFont}
                    onChange={(nextFont) => onChangeHandlerFont(setContactmeFont, nextFont.family)}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className="preview-section" style={{ backgroundColor: contactmeBgColor }}>
            <p className="apply-font" style={{ fontSize: `${contactmeFontSize}em`, color: contactmeColor }}>~Font preview~</p>
          </div>
        </div>
      );
    }
    return (<div />);
  };

  useEffect(() => {
    if (props.match.params.id) {
      props.fetchPortfolio(props.match.params.id);
    }
  }, [props.match.params.id]);

  useEffect(() => {
    if (Object.keys(portfolio).length > 0) {
      setName(portfolio.name);
      setUserNameColor(portfolio.header.userName.color);
      setUserNameBgColor(portfolio.header.userName.backgroundColor);
      setUserNameFont(portfolio.header.userName.font);
      setUserNameFontSize(portfolio.header.userName.fontSize);

      setRoleColor(portfolio.header.role.color);
      setRoleBgColor(portfolio.header.role.backgroundColor);
      setRoleFont(portfolio.header.role.font);
      setRoleFontSize(portfolio.header.role.fontSize);

      setAboutmeColor(portfolio.aboutMe.color);
      setAboutmeBgColor(portfolio.aboutMe.backgroundColor);
      setAboutmeFont(portfolio.aboutMe.font);
      setAboutmeFontSize(portfolio.aboutMe.fontSize);

      setProjectsColor(portfolio.projects.color);
      setProjectsBgColor(portfolio.projects.backgroundColor);
      setProjectsFont(portfolio.projects.font);
      setProjectsFontSize(portfolio.projects.fontSize);
      setProjectsDir(portfolio.projects.flexDirection);

      setContactmeColor(portfolio.contactMe.color);
      setContactmeBgColor(portfolio.contactMe.backgroundColor);
      setContactmeFont(portfolio.contactMe.font);
      setContactmeFontSize(portfolio.contactMe.fontSize);
    }
  }, [portfolio]);

  function onDoneEdit() {
    setIsEditing(!isEditing);
    let tempUsernameFontSize = userNameFontSize;
    let tempRoleFontSize = roleFontSize;
    let tempAboutmeFontSize = aboutmeFontSize;
    let tempProjectsFontSize = projectsFontSize;
    let tempContactmeFontSize = contactmeFontSize;

    if (userNameFontSize.lastIndexOf('e') >= 1) {
      setUserNameFontSize(userNameFontSize.substring(0, userNameFontSize.indexOf('e')));
      tempUsernameFontSize = userNameFontSize.substring(0, userNameFontSize.indexOf('e'));
    }
    if (roleFontSize.lastIndexOf('e') >= 1) {
      setRoleFontSize(roleFontSize.substring(0, roleFontSize.indexOf('e')));
      tempRoleFontSize = roleFontSize.substring(0, roleFontSize.indexOf('e'));
    }
    if (aboutmeFontSize.lastIndexOf('e') >= 1) {
      setAboutmeFontSize(aboutmeFontSize.substring(0, aboutmeFontSize.indexOf('e')));
      tempAboutmeFontSize = aboutmeFontSize.substring(0, aboutmeFontSize.indexOf('e'));
    }
    if (projectsFontSize.lastIndexOf('e') >= 1) {
      setProjectsFontSize(projectsFontSize.substring(0, aboutmeFontSize.indexOf('e')));
      tempProjectsFontSize = projectsFontSize.substring(0, projectsFontSize.indexOf('e'));
    }
    if (contactmeFontSize.lastIndexOf('e') >= 1) {
      setContactmeFontSize(contactmeFontSize.substring(0, aboutmeFontSize.indexOf('e')));
      tempContactmeFontSize = contactmeFontSize.substring(0, contactmeFontSize.indexOf('e'));
    }

    props.updatePortfolio(props.match.params.id, {
      name,
      header: {
        ...portfolio.header,
        userName: {
          ...portfolio.header.userName,
          color: userNameColor,
          backgroundColor: userNameBgColor,
          font: userNameFont,
          fontSize: `${tempUsernameFontSize}em`,
        },
        role: {
          ...portfolio.header.role,
          color: roleColor,
          backgroundColor: roleBgColor,
          font: roleFont,
          fontSize: `${tempRoleFontSize}em`,
        },
      },
      aboutMe: {
        ...portfolio.aboutMe,
        color: aboutmeColor,
        backgroundColor: aboutmeBgColor,
        font: aboutmeFont,
        fontSize: `${tempAboutmeFontSize}em`,
      },
      projects: {
        ...portfolio.projects,
        color: projectsColor,
        backgroundColor: projectsBgColor,
        font: projectsFont,
        fontSize: `${tempProjectsFontSize}em`,
        flexDirection: projectsDir,
      },
      contactMe: {
        ...portfolio.contactMe,
        color: contactmeColor,
        backgroundColor: contactmeBgColor,
        font: contactmeFont,
        fontSize: `${tempContactmeFontSize}em`,
      },
    });
  }

  if (Object.keys(portfolio).length === 0) {
    return null;
  } else if (props.error === '') {
    if (!isEditing || !props.authenticated) {
      return (
        <div>
          <div className="input_div">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <h1>Add your creative spin! <button className="editicon-addspin" id="icon" type="button" onClick={() => setIsEditing(!isEditing)}><FontAwesomeIcon icon={faEdit} /></button></h1>
            <div className="scrollable-options">
              <button type="button" onClick={backSlide}> <FontAwesomeIcon icon={faChevronLeft} onClick={backSlide} /> </button>
              {renderSlide()}
              <button type="button" onClick={forwardSlide}> <FontAwesomeIcon icon={faChevronRight} onClick={forwardSlide} /> </button>
            </div>
            <div className="buttons_div">
              <form action="/portfolios">
                <button className="editicon-addspin renderbutton" onClick={() => setIsEditing(!isEditing)} type="submit">Edit</button>
                <button className="editicon-addspin renderbutton" type="submit">Render</button>
              </form>
            </div>
          </div>
        </div>
      );
    } else { // In editing mode
      return (
        <div className="input_div editing">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <h1>Time to design! <button className="editicon-addspin done" id="icon" type="button" onClick={onDoneEdit}><FontAwesomeIcon icon={faCheck} /></button></h1>
          <h3 className="h3portfolioname"> Portfolio Name: <input onChange={onChangeHandler(setName)} value={name} /></h3>

          <div className="scrollable-options">
            <button type="button" onClick={backSlide}> <FontAwesomeIcon icon={faChevronLeft} onClick={backSlide} /> </button>
            {renderEditingSlides()}
            <button type="button" onClick={forwardSlide}> <FontAwesomeIcon icon={faChevronRight} onClick={forwardSlide} /> </button>
          </div>
          <div className="buttons_div">
            <button className="editicon-addspin renderbutton cancel" id="icon" type="button" onClick={onDoneEdit}>Done</button>
            <Link to="/portfolios">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button className="editicon-addspin renderbutton cancel" id="icon" type="button">Cancel</button>
            </Link>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="input_div">
        <h2>Check if you are on the right post.</h2>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    curr: reduxState.portfolio.current,
    error: reduxState.errors.error,
    authenticated: reduxState.auth.authenticated,
  };
}

export default withRouter(connect(mapStateToProps, { fetchPortfolio, updatePortfolio })(customize));
