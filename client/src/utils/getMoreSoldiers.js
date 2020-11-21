import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from '../store/index';

// import { API_URL } from './constante';

// == actions
import { setSoldiers, setNextPage } from '../store/action/home';

const getAllSoldiers = () => {
  const state = store.getState();
  const promise = axios.get(
    state.nextPage,
  );
  promise.then((res) => {
    // console.log('res.data', res.data);
    const soldiers = res.data;
    store.dispatch(setSoldiers(soldiers.results));
    store.dispatch(setNextPage(soldiers.next));
  });
};

export default getAllSoldiers;
