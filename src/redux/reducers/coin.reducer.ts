import { GET_COIN_DETAIL, GET_COIN_LIST } from '../types';

export const initialState = {
  list: [],
  detail: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_COIN_LIST:
      return {
        ...state,
        ...action.payload,
      };
    case GET_COIN_DETAIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
