import {
  FilterActionTypes, FilterState, SET_QUERY, SET_STATUS, Status,
} from '../types/Status';

export const setStatus = (status: Status): FilterActionTypes => ({
  type: SET_STATUS,
  payload: status,
});

export const setQuery = (query: string): FilterActionTypes => ({
  type: SET_QUERY,
  payload: query,
});

const initialState: FilterState = {
  query: '',
  status: 'all',
};

const filterReducer = (
  state = initialState,
  action: FilterActionTypes,
): FilterState => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.payload };

    case SET_QUERY:
      return { ...state, query: action.payload };

    default:
      return state;
  }
};

export default filterReducer;
