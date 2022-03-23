import {combineReducers} from 'redux';
import authReducers from './reducers/authReducers';
import coursesReducers from './reducers/coursesReducers';
import loader from './reducers/loader';

export default combineReducers({
  authReducers,
  coursesReducers,
  loader,
});
