/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import '../style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit, faWindowClose, faWindowMaximize, faEye, faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Link, withRouter } from 'react-router-dom';
import { fetchPortfolio, fetchPortfolios, deletePortfolio } from '../actions';
import '../styles/existing-portfolios.scss';

class ExistingPortfolios extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount = (props) => {
    this.props.fetchPortfolios();
  }

  onDeleteClick = (id) => {
    this.props.deletePortfolio(id, this.props.history);
  }

  displayPortfolios = () => {
    if (this.props.portfolios.length === 0) {
      return (
        <div className="noportfolios">
          <h2>You currently have no portfolios!</h2>
          <button type="button">
            <Link to="/templates">
              Create one now!
            </Link>
          </button>
        </div>
      );
    }
    return (
      this.props.portfolios.map((portfolio) => {
        if (portfolio) {
          return (
            <div className="portfolio-construct">
              <h2>{portfolio.name}</h2>
              <div className="portfolio-container">
                <div id="wrap" className="iframecontainer">
                  <iframe id="scaled-frame" src={`/portfolios/${portfolio.id}`} />
                  <div className="portfolio-options">
                    <span><FontAwesomeIcon icon={faBars} /></span>
                    <div className="dropdown-content">
                      <Link to={`/portfolios/edit/resume/${portfolio._id}`}>
                        Edit Content     <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <Link to={`/portfolios/edit/style/${portfolio._id}`}>
                        Edit Style       <FontAwesomeIcon icon={faWindowMaximize} />
                      </Link>
                      <a onClick={() => { window.location.href = `/portfolios/${portfolio._id}`; }}>
                        View    <FontAwesomeIcon icon={faEye} />
                      </a>
                      <a className="portfolio-delete" onClick={() => { this.onDeleteClick(portfolio.id); }}>Delete  <FontAwesomeIcon icon={faWindowClose} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div>
              You currently have no portfolios!
              <Link to="/templates">
                Edit Resume
              </Link>
            </div>
          );
        }
      })
    );
  }

  render() {
    return (
      <div className="display-portfolios">
        {this.displayPortfolios()}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  portfolios: reduxState.portfolio.all,
  curr: reduxState.portfolio.current,
});

export default withRouter(connect(mapStateToProps, { fetchPortfolio, fetchPortfolios, deletePortfolio })(ExistingPortfolios));
