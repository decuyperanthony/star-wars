import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from '../store/index';

import { API_URL } from './constante';

// == actions
import {
  setSoldiers,
  setNextPage,
  setTotalResult,
} from '../store/action/home';

const getSoldierByName = (search) => {
  const promise = axios.get(`${API_URL}/soldier/${search}`);
  promise.then((res) => {
    const { results, next, count } = res.data;
    store.dispatch(setSoldiers(results));
    store.dispatch(setNextPage(next));
    store.dispatch(setTotalResult(count));
  });
};

export default getSoldierByName;
