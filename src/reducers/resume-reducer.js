import { ActionTypes } from '../actions';

const initialState = {
  resume: {},
};

const ResumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_RESUME:
      return { ...state, resume: action.payload };
    case ActionTypes.UPDATE_RESUME:
      return { ...state, resume: action.payload };
    default:
      return state;
  }
};

export default ResumeReducer;
