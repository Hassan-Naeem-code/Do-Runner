const sessionLogin = loginSession => {
  return {
    type: 'LOGIN_SESSION',
    loginSession,
  };
};
const logOutUserFromApp = () => {
  return {
    type: 'LOGOUT_SESSION',
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

export {sessionLogin, showLoader, loaderStatus, logOutUserFromApp};
