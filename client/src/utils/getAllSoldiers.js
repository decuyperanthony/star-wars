import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import { setAllSoldiers } from '../store/action/home';

const getAllSoldiers = (url = `${API_URL}/soldiers`) => {
  const promise = axios.get(
    url,
  );
  promise.then((res) => {
    // console.log('res.data', res.data);
    const soldiers = res.data;
    console.log('soldiers', soldiers);
    store.dispatch(setAllSoldiers(soldiers));
  });
};

export default getAllSoldiers;
