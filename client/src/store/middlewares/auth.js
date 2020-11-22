/* eslint-disable no-console */
import axios from 'axios';
import {
  LOGIN,
  errorAuth,
  DISCONNECT,
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
        .then(async (res) => {
          if (res.data) {
            // localStorage.user = JSON.stringify(res.data.user);
            // localStorage.userToken = JSON.stringify(res.data.userToken);
            await store.dispatch(enterHomePage(action.payload.history));
          } else {
            store.dispatch(errorAuth('Désolé, notre serveur ne répond pas'));
          }
        })
        .catch(() => {
          console.log('mauvais mail ou mot de passe');
          store.dispatch(errorAuth('Wrong email or password'));
        });
      break;
    }
    case DISCONNECT: {
      console.log('DISCONNECT');
      localStorage.clear();
      break;
    }

    default: {
      next(action);
    }
  }
};
