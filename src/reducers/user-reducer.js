import { ActionTypes } from '../actions';

const initialState = {
  profile: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROFILE:
      return { ...state, profile: action.payload };
    case ActionTypes.UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
