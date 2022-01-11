/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import { createPortfolio, fetchTemplates } from '../actions';
import '../styles/choose-template.scss';

class ChooseTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioName: '',
      templateSelected: '',
      templateSelectedImg: '',
      templateSelectedName: '',
      showModal: false,
    };
  }

  componentDidMount = (props) => {
    this.props.fetchTemplates();
  }

  clickTemplate = (template, id) => {
    const dict = {
      0: 'Classic',
      1: 'Bleu',
      2: 'Verbatim',
      3: 'Arista',
      4: 'Corvey',
      5: 'Fancy',
    };
    this.setState({ templateSelected: id, templateSelectedImg: template, templateSelectedName: dict[id % 5] });
    this.handleOpenModal();
  }

  onPortfolioNameChange = (event) => {
    this.setState({ portfolioName: event.target.value });
  }

  onCreateTemplate = () => {
    if (this.state.portfolioName !== '') {
      this.props.createPortfolio(this.state.templateSelected, this.state.portfolioName, this.props.history);
    }
  }

  displayInvalidPortfolioName = () => {
    if (this.state.portfolioName === '') {
      return (
        <div className="black-font error-msg-name">Please name your portfolio before proceeding!</div>
      );
    } else {
      return null;
    }
  }

  displayCreatingTemplates = () => {
    return (
      this.props.templates.map((template, id) => {
        return (
          <div className="template-containers">
            <div className="template-name">
              {this.displayPortfolioName(id)}
            </div>
            <img src={template} alt="none" onClick={() => { this.clickTemplate(template, id); }} />
          </div>
        );
      })
    );
  }

  displayPortfolioName = (id) => {
    const moddedId = id % 5;
    const dict = {
      0: 'Classic',
      1: 'Bleu',
      2: 'Verbatim',
      3: 'Arista',
      4: 'Corvey',
      5: 'Fancy',
    };
    const selectedname = dict[moddedId];
    return (
      selectedname
    );
  }

  displayAll = (props) => {
    if (this.props.templates.length === 0) {
      return (<div>No Templates</div>);
    } else {
      return (
        this.props.templates.map((template, id) => {
          return (
            <div className="template-containers">
              <div className="template-name">
                {this.displayPortfolioName(id)}
              </div>
              <img src={template} alt="none" onClick={() => { this.clickTemplate(template, id); }} />
            </div>
          );
        })
      );
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="choose-template-page">
        {this.displayAll()}
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Select Portfolio Name"
          ariaHideApp={false}
        >
          <div className="selectedmodal">
            <div className="selectedmodalleft">
              <img src={this.state.templateSelectedImg} alt="none" />
            </div>
            <div className="selectedmodalright">
              <h2 className="black-font portfolio-chosen">Thank you for choosing {this.state.templateSelectedName}!</h2>
              <h2 className="black-font portfolio-name">Portfolio Name</h2>
              <input type="text" className="portfolio-name-enter" onChange={this.onPortfolioNameChange} value={this.state.portfolioName} placeholder="Enter your portfolio name" />
              {this.displayInvalidPortfolioName()}
              <div className="bottom-options">
                <button type="button" className="modalbuttons" onClick={this.onCreateTemplate}>Create</button>
                <button type="button" className="modalbuttons" onClick={this.handleCloseModal}>Back</button>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  templates: state.template.all,
});

export default withRouter(connect(mapStateToProps, { createPortfolio, fetchTemplates })(ChooseTemplate));
