import {
  ERROR_AUTH,
  SET_USER,
} from './action/auth';

import { SET_ALL_SOLDIERS } from './action/home';

const initialState = {
  errorAuth: '',
  userData: {},
  soldiers: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ERROR_AUTH: {
      return {
        ...state,
        errorAuth: action.payload,
      };
    }

    case SET_USER: {
      return {
        ...state,
        userData: action.user,
      };
    }
    case SET_ALL_SOLDIERS: {
      return {
        ...state,
        soldiers: action.soldiers,
      };
    }
    default: {
      return state;
    }
  }
};
