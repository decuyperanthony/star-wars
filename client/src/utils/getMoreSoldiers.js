import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import store from '../store/index';

// == actions
import { setSoldiers, setNextPage } from '../store/action/home';

const getAllSoldiers = () => {
  const state = store.getState();
  const promise = axios.get(
    state.nextPage,
  );
  promise.then((res) => {
    const soldiers = res.data;
    store.dispatch(setSoldiers(soldiers.results));
    store.dispatch(setNextPage(soldiers.next));
  });
};

export default getAllSoldiers;
