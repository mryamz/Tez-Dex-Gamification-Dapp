import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { tzip12 } from '@taquito/tzip12';
import axios from 'axios';
import { REACT_APP_TEZOS_RPC_URL } from './constants';

const Tzip12Module = require('@taquito/tzip12').Tzip12Module;
const Tzip16Module = require('@taquito/tzip16').Tzip16Module;

const Tezos = new TezosToolkit(REACT_APP_TEZOS_RPC_URL);

Tezos.addExtension(new Tzip12Module());
Tezos.addExtension(new Tzip16Module());

const contractAddress = process.env.VUE_APP_TEDDY_MESSENGER;

const wallet = new BeaconWallet({
  name: "TezDex Gameification",
  preferredNetwork: 'hangzhounet',
  colorMode: 'dark'
});

Tezos.setProvider({ wallet });

const network = {
  type: 'hangzhounet',
  rpcUrl: REACT_APP_TEZOS_RPC_URL
};

const clearActiveAccount = () => {
  wallet.clearActiveAccount();
};

const disconnect = () => {
  wallet.disconnect();
};

const getActiveAccount = async () => {
  return await wallet.client.getActiveAccount();
};

const getNetworkPermission = async () => {
  var activeAccount = await getActiveAccount();

  if (!activeAccount) {
    await wallet.requestPermissions({network});
    activeAccount = getActiveAccount();
  }

  return activeAccount;
}

const buy = async(recipients, subject, body) => {
  getNetworkPermission();
}

const getTokenContract = async (contractAddress) => {
  return await Tezos.contract.at(contractAddress, tzip12);
}

export {
  Tezos,
  wallet,
  clearActiveAccount,
  disconnect,
  getActiveAccount,
  getNetworkPermission,
  getTokenContract,
};