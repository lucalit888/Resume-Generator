// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import ErrorReducer from './error-reducer';
import AuthReducer from './auth-reducer';
import PortfolioReducer from './portfolio-reducer';
import TemplateReducer from './template-reducer';
import ResumeReducer from './resume-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  errors: ErrorReducer,
  auth: AuthReducer,
  portfolio: PortfolioReducer,
  template: TemplateReducer,
  resume: ResumeReducer,
  user: UserReducer,
});

export default rootReducer;
