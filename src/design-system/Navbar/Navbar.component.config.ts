export interface IProps {
  connectWallet: any;
  walletAddress: `0x${string}` | undefined;
  balance: string;
}

const defaultProps = {};

const displayName = 'Navbar';

export default { defaultProps, displayName };
