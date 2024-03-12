import React, { useContext } from 'react';
import { Button, Pane, majorScale } from 'evergreen-ui';
import config, { IProps } from './Navbar.component.config';
import { addressShortener } from '../../utils/wallet.util';
import styles from './Navbar.component.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar: React.FC<IProps> = ({
  connectWallet,
  walletAddress,
  balance,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Pane
      width="100%"
      height={80}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingRight={majorScale(2)}
      paddingTop={majorScale(2)}
    >
      <Pane display="flex"></Pane>
      <Pane display="flex" justifyContent="center" alignItems="center">
        {walletAddress && (
          <div
            className={theme === 'light' ? styles.balanceLight : styles.balance}
          >
            {balance} ETH
          </div>
        )}
        <Button
          size="large"
          onClick={() => connectWallet()}
          className="custom-btn"
        >
          {walletAddress ? addressShortener(walletAddress) : 'Connect Wallet'}
        </Button>
      </Pane>
    </Pane>
  );
};

Navbar.defaultProps = config.defaultProps;
Navbar.displayName = config.displayName;

export default React.memo(Navbar);
