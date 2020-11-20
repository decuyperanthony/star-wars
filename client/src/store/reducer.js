import {
  ERROR_AUTH,
  SET_USER,
} from './action/auth';

const initialState = {
  errorAuth: '',
  userData: {},
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
    default: {
      return state;
    }
  }
};
