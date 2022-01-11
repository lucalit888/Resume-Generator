import { ActionTypes } from '../actions';

const initialState = {
  all: [],
};

const TemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TEMPLATES:
      return { ...state, all: action.payload };
    default:
      return state;
  }
};

export default TemplateReducer;
