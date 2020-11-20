import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from '../store/index';

// import { API_URL } from './constante';

// == actions
import { setAllSoldiers, setNextPage } from '../store/action/home';

const getAllSoldiers = () => {
  const state = store.getState();
  console.log('state', state);
  const promise = axios.get(
    state.nextPage,
  );
  promise.then((res) => {
    // console.log('res.data', res.data);
    const soldiers = res.data;
    store.dispatch(setAllSoldiers(soldiers.results));
    store.dispatch(setNextPage(soldiers.next));
  });
};

export default getAllSoldiers;
