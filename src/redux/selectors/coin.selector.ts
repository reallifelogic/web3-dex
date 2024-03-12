import { RootState } from '../store';

export const getCoinListSelector = (state: RootState) => state.coins.list;
export const getCoinInfoSelector = (state: RootState) => state.coins.detail;
