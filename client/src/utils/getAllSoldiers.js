import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import {
  setAllSoldiers,
  setNextPage,
  setTotalResult,
} from '../store/action/home';

const getAllSoldiers = (url = `${API_URL}/soldiers`) => {
  const promise = axios.get(
    url,
  );
  promise.then((res) => {
    // console.log('res.data', res.data);
    const { results, next, count } = res.data;
    store.dispatch(setAllSoldiers(results));
    store.dispatch(setNextPage(next));
    store.dispatch(setTotalResult(count));
  });
};

export default getAllSoldiers;
