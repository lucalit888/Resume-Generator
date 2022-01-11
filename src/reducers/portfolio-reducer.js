import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const PortfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PORTFOLIOS:
      return { ...state, all: action.payload };
    case ActionTypes.FETCH_PORTFOLIO:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default PortfolioReducer;
