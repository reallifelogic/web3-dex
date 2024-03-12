import React from 'react';
import Modal from 'react-modal';
import styles from './TokenModal.component.module.scss';
import config, { IProps } from './TokenModal.component.config';
import { BiX } from 'react-icons/bi';
import { customModalStyles } from './TokenModal.component.constant';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinListSelector } from '@redux/selectors/coin.selector';
import { getCoinList } from '@redux/actions/coin.action';

const TokenModal: React.FC<IProps> = ({
  visible,
  type,
  setOriginCurrency,
  setDestinationCurrency,
  onRequestClose,
}) => {
  const dispatch = useDispatch();
  const coinList = useSelector(getCoinListSelector);
  const [coins, setCoins] = React.useState(coinList);

  React.useEffect(() => {
    getCoinList(dispatch).then((list) => setCoins(list));
  }, [dispatch]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const filteredCoins = coinList.filter(
      (coin: Record<string, string>) =>
        coin.name.toLowerCase().includes(value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(value.toLowerCase())
    );

    setCoins(filteredCoins);
  };

  const handleSelect = (coin: Record<string, string>) => {
    if (type === 'origin') {
      setOriginCurrency(coin);
    } else {
      setDestinationCurrency(coin);
    }
    setCoins(coinList);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={visible}
      style={customModalStyles}
      onRequestClose={onRequestClose}
    >
      <div className={styles.modalHeader}>
        Select Token
        <BiX size={28} onClick={onRequestClose} />
      </div>
      <div className={styles.modalContent}>
        <div className={styles.search}>
          <input
            placeholder="Search name or symbol"
            onChange={handleOnChange}
          />
        </div>
        <div className={styles.list}>
          {coins &&
            coins.map((coin: Record<string, string>) => (
              <div className={styles.item} onClick={() => handleSelect(coin)}>
                <img src={coin.image} alt={coin.symbol} />
                <div className={styles.desc}>
                  <p>{coin.name}</p>
                  <span>{coin.symbol.toUpperCase()}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

TokenModal.defaultProps = config.defaultProps;
TokenModal.displayName = config.displayName;

export default TokenModal;
