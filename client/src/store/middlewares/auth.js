/* eslint-disable no-console */
// import React from 'react';
import axios from 'axios';
// import { useTranslation } from 'react-i18next';

import {
  LOGIN,
  errorAuth,
  setUser,
  // DISCONNECT,
} from '../action/auth';
import { enterHomePage } from '../action/route';

// import { setLoaderOpen, setLoaderClose } from '../action/loader';

import { API_URL } from '../../utils/constante';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('login');
      // // console.log('login');
      // store.dispatch(setLoaderOpen());
      // let errorMessage = '';
      // store.dispatch({ type: SET_ERROR_AUTH, errorMessage });
      axios
        .post(`${API_URL}/login`, {
          username: action.payload.data.username,
          password: action.payload.data.password,
        }, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            // console.log('res', res.data.user.mail_actived);
            localStorage.user = JSON.stringify(res.data.user);
            localStorage.userToken = JSON.stringify(res.data.userToken);

            const user = JSON.parse(localStorage.getItem('user'));
            store.dispatch(setUser(user));
            // store.dispatch(setLoaderClose());
            store.dispatch(enterHomePage(action.payload.history));
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          console.log('mauvais mail ou mot de passe');
          // store.dispatch(setLoaderClose());
          // console.trace(error);
          store.dispatch(errorAuth('Wrong email or password'));
          console.log(`Can’t access ${API_URL} response. Blocked by browser?`);
        });
      break;
    }

    default: {
      next(action);
    }
  }
};
