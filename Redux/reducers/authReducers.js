const initial_state = {
  user: null,
  loginSession: null,
  my_token: null,
  walkthrough: null,
  loading: false,
  currentOrientation: 'PORTRAIT',
  notify_Count: 0,
  loadingStatus: '',
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {...state, user: action.user};
    }
    case 'LOGIN_SESSION': {
      return {
        ...state,
        loginSession: action.loginSession,
        user: action.loginSession,
        my_token: action.loginSession.token,
      };
    }
    case 'UPDATE_TOKEN': {
      return {...state, my_token: action.my_token};
    }
    case 'WALKTHROUGH': {
      return {...state, walkthrough: action.walkthrough};
    }
    case 'SHOW_LOADER':
      return {...state, loading: action.loading};
    case 'LOADER_STATUS':
      return {...state, loadingStatus: action.loadingStatus};
    case 'Notification_Count':
      return {...state, notify_Count: action.payload};
    case 'ORIENTATION_UPDATE': {
      return {...state, currentOrientation: action.currentOrientation};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
