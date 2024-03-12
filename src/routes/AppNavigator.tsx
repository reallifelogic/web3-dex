import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWeb3ModalAccount,
} from '@web3modal/ethers/react';
import { Dashboard } from '../screens';
import { Pane } from 'evergreen-ui';
import styles from './AppNavigator.module.scss';
import { Navbar, Sidebar } from '@design-system/index';
import { provider } from '../utils/wallet.util';
import { ethers } from 'ethers';
import { ThemeContext } from '../context/ThemeContext';
import { sepolia, metadata, connectorImages } from '@constants/wallet.constant';

const AppNavigator = () => {
  const [theme, setTheme] = React.useState('dark');

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [sepolia],
    projectId: import.meta.env.VITE_PROJECT_ID,
    enableAnalytics: true,
    enableOnramp: true,
    connectorImages,
  });

  const { open } = useWeb3Modal();
  const { address } = useWeb3ModalAccount();
  const [balance, setBalance] = React.useState('');

  React.useEffect(() => {
    (async () => {
      if (!provider || !address) return;

      const walletAddress = address as string;
      const balance = await provider.getBalance(walletAddress);

      setBalance(ethers.formatEther(balance));
    })();
  }, [address]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Pane className={theme === 'dark' ? styles.wrapper : styles.wrapperLight}>
        <Pane display="flex">
          <Pane display="flex" flex={1} flexDirection="column">
            <Navbar
              connectWallet={open}
              walletAddress={address}
              balance={balance}
            />
            <Sidebar />
            <Pane className={styles.content}>
              <Routes>
                <Route path="/" Component={Dashboard} />
              </Routes>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </ThemeContext.Provider>
  );
};

export default AppNavigator;
