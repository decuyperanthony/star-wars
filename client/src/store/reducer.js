import {
  ERROR_AUTH,
  SET_USER,
} from './action/auth';

import {
  // SET_ALL_SOLDIERS,
  SET_NEXT_PAGE,
  SET_INPUT_VALUE,
  SET_TOTAL_RESULT,
  SET_SOLDIERS,
} from './action/home';

const initialState = {
  errorAuth: '',
  userData: {},
  soldiers: [],
  nextPage: '',
  inputValue: '',
  count: 0,
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

    case SET_SOLDIERS: {
      // console.log('action', action);
      return {
        ...state,
        soldiers: action.soldiers,
      };
    }
    // case SET_ALL_SOLDIERS: {
    //   return {
    //     ...state,
    //     soldiers: [...state.soldiers, ...action.soldiers],
    //     // soldiers: action.soldiers,
    //   };
    // }
    case SET_NEXT_PAGE: {
      return {
        ...state,
        nextPage: action.payload,
      };
    }
    case SET_INPUT_VALUE: {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    case SET_TOTAL_RESULT: {
      return {
        ...state,
        count: action.payload,
      };
    }
    // case SET_ALL_SOLDIERS: {
    //   const oldSoldier = [state.soldiers];
    //   oldSoldier.push(action.soldiers);
    //   console.log('oldSoldier', oldSoldier);
    //   return {
    //     ...state,
    //     soldiers: action.soldiers,
    //   };
    // }
    default: {
      return state;
    }
  }
};
