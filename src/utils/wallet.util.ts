import { ethers } from 'ethers';

export const provider = new ethers.JsonRpcProvider(
  import.meta.env.VITE_RPC_URL
);

export const addressShortener = (address: string) => {
  let firstSection = '',
    lastSection = '';

  for (let i = 0; i < address.length; i++) {
    if (i < 6) {
      firstSection = firstSection + address[i];
    }
    if (i > 32) {
      lastSection = lastSection + address[i];
    }
  }

  return `${firstSection}...${lastSection}`;
};
