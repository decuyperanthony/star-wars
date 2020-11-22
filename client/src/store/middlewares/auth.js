/* eslint-disable no-console */
import axios from 'axios';
import {
  LOGIN,
  errorAuth,
  DISCONNECT,
  setUser,
} from '../action/auth';
import { enterHomePage } from '../action/route';

import { API_URL } from '../../utils/constante';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const errorMessage = '';
      store.dispatch(errorAuth(errorMessage));
      axios
        .post(`${API_URL}/login`, {
          username: action.payload.data.username,
          password: action.payload.data.password,
        }, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.success) {
            localStorage.user = JSON.stringify(res.data.user);
            localStorage.userToken = JSON.stringify(res.data.userToken);
            const user = JSON.parse(sessionStorage.getItem('user'));
            store.dispatch(setUser(user));
            store.dispatch(enterHomePage(action.payload.history));
          } else {
            store.dispatch(errorAuth('Désolé, notre serveur ne répond pas'));
          }
        })
        .catch(() => {
          store.dispatch(errorAuth('Wrong email or password'));
        });
      break;
    }
    case DISCONNECT: {
      localStorage.clear();
      break;
    }

    default: {
      next(action);
    }
  }
};
