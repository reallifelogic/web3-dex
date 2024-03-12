import { ChangeEvent } from 'react';

export interface IProps {
  isConnected: boolean;
  coinPrice: number;
  originValue: number;
  destinationValue: number;
  destinationCurrency: any;
  setDestinationCurrency: any;
  originCurrency: any;
  setOriginCurrency: any;
  onChangeOrigin: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDestination: (event: ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps = {};

const displayName = 'BuyForm';

export default { defaultProps, displayName };
