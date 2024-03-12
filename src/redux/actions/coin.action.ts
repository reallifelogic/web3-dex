import axios from 'axios';
import { GET_COIN_DETAIL, GET_COIN_LIST } from '../types';
import { Dispatch } from 'redux';

export const getCoinList = async (dispatch: Dispatch) => {
  let result;
  let payload = {
    list: [],
  };

  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );

    payload = {
      list: data,
    };
    result = data;
  } catch (error) {
    throw new Error(error as string);
  }

  dispatch({ type: GET_COIN_LIST, payload });
  return result;
};

export const getCoinInfo = async (
  { id, vs }: { id: string; vs: string },
  dispatch: Dispatch
) => {
  let payload = {
    detail: {},
  };

  try {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id.toLowerCase()}&vs_currencies=${vs.toLowerCase()}`
    );

    const result: number[] = Object.values(data);

    payload = {
      detail: Object.values(result[0])[0],
    };
  } catch (error) {
    throw new Error(error as string);
  }

  dispatch({ type: GET_COIN_DETAIL, payload });
};
