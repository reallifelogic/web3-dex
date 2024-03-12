import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CRYPTO_DEFAULT } from '@constants/currency.constant';
import { getCoinInfoSelector } from '@selectors/coin.selector';
import { getCoinInfo } from '@actions/coin.action';
import { SwapForm } from '@components';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { isConnected } = useWeb3ModalAccount();

  const coinPrice = useSelector(getCoinInfoSelector);

  const [originValue, setOriginValue] = React.useState(1);
  const [destinationValue, setDestinationValue] = React.useState(0);
  const [originCurrency, setOriginCurrency] = React.useState(CRYPTO_DEFAULT[0]);
  const [destinationCurrency, setDestinationCurrency] = React.useState(
    CRYPTO_DEFAULT[1]
  );

  React.useEffect(() => {
    getCoinInfo(
      {
        id: originCurrency.id,
        vs: destinationCurrency.symbol,
      },
      dispatch
    );
  }, [destinationCurrency, originCurrency, dispatch, coinPrice]);

  const handleOnChange = React.useCallback(
    (setState: React.Dispatch<React.SetStateAction<number>>) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        setState(Number(event.target.value));
      },
    []
  );

  return (
    <SwapForm
      isConnected={isConnected}
      coinPrice={coinPrice}
      originValue={originValue}
      destinationValue={destinationValue}
      originCurrency={originCurrency}
      setOriginCurrency={setOriginCurrency}
      destinationCurrency={destinationCurrency}
      setDestinationCurrency={setDestinationCurrency}
      onChangeOrigin={handleOnChange(setOriginValue)}
      onChangeDestination={handleOnChange(setDestinationValue)}
    />
  );
};

export default Dashboard;
