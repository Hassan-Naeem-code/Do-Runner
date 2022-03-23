import {SHOW_LOADER, HIDE_LOADER} from '../actions/types';

const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
}
