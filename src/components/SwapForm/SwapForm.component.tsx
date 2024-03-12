import { Button, Pane } from 'evergreen-ui';
import React from 'react';
import { CurrencyInput, Tabs } from '@design-system';
import styles from './SwapForm.component.module.scss';
import config, { IProps } from './SwapForm.component.config';
import { TokenModal } from '..';
import { TAB_DATA } from './SwapForm.component.constant';

const SwapForm: React.FC<IProps> = ({
  isConnected,
  coinPrice,
  originValue,
  originCurrency,
  setOriginCurrency,
  destinationCurrency,
  setDestinationCurrency,
  onChangeOrigin,
  onChangeDestination,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState('');

  const handleSelectCurrency = (type: string) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const handleSwap = async () => {
    //TODO: Get token contract, make approvals, swap functionality in smart contract.
  };

  return (
    <Pane id="swap" className={styles.swap}>
      <Pane className={styles.children}>
        <div className={styles.contentWrapper}>
          <div>
            <Tabs data={TAB_DATA} activeTab="Swap" />
            <CurrencyInput
              label="You Pay"
              value={originValue}
              selectedCurrency={originCurrency}
              disabled={false}
              onChange={onChangeOrigin}
              onSelectCurrency={() => handleSelectCurrency('origin')}
            />
            <CurrencyInput
              label="Est. Receive"
              value={Number(originValue * coinPrice)}
              selectedCurrency={destinationCurrency}
              disabled
              onChange={onChangeDestination}
              onSelectCurrency={() => handleSelectCurrency('destination')}
            />
          </div>
          <div className={styles.continue}>
            <Button
              size="large"
              className={`${
                isConnected ? 'custom-btn' : 'disabled-btn'
              } full-w`}
              onClick={handleSwap}
            >
              {isConnected
                ? 'Swap Token'
                : 'You need to connect to your wallet'}
            </Button>
          </div>
        </div>
      </Pane>
      <TokenModal
        visible={isModalOpen}
        type={modalType}
        setOriginCurrency={setOriginCurrency}
        setDestinationCurrency={setDestinationCurrency}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </Pane>
  );
};

SwapForm.defaultProps = config.defaultProps;
SwapForm.displayName = config.displayName;

export default SwapForm;
