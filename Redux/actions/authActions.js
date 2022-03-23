import {Api} from '../../APIs/interceptor';
import * as actionTypes from './types';

const sessionLogin = loginSession => {
  return {
    type: 'LOGIN_SESSION',
    loginSession,
  };
};

const showLoader = loading => {
  return {
    type: 'SHOW_LOADER',
    loading,
  };
};
const loaderStatus = loadingStatus => {
  return {
    type: 'LOADER_STATUS',
    loadingStatus,
  };
};

export {sessionLogin, showLoader, loaderStatus};
