import * as Actions from "../actions/types";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.LOADING_START:
      return {
        ...state,
        loading: true
      };

    case Actions.LOADING_STOP:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
