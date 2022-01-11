import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  authError: '',
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
