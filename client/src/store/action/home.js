// SOLDIERS
export const SET_ALL_SOLDIERS = 'SET_ALL_SOLDIERS';

export const setAllSoldiers = (soldiers) => ({
  type: SET_ALL_SOLDIERS,
  soldiers,
});

export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';

export const setNextPage = (payload) => ({
  type: SET_NEXT_PAGE,
  payload,
});

export const SET_TOTAL_RESULT = 'SET_TOTAL_RESULT';

export const setTotalResult = (payload) => ({
  type: SET_TOTAL_RESULT,
  payload,
});

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = (payload) => ({
  type: SET_INPUT_VALUE,
  payload,
});
