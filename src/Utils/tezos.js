import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { tzip12 } from '@taquito/tzip12';
import axios from 'axios';
import {  getCurrentLevel, LEVELS, PREFERRED_NETWORK_TYPE, REACT_APP_TEZOS_RPC_URL, SCORER_V1_CONTRACT_HANGZHOUNET, WXTZ_V1_CONTRACT_HANGZHOUNET } from './globals';

const Tzip12Module = require('@taquito/tzip12').Tzip12Module;
const Tzip16Module = require('@taquito/tzip16').Tzip16Module;

const Tezos = new TezosToolkit(REACT_APP_TEZOS_RPC_URL);

Tezos.addExtension(new Tzip12Module());
Tezos.addExtension(new Tzip16Module());

const wallet = new BeaconWallet({
  name: "TezDex Gameification",
  preferredNetwork: PREFERRED_NETWORK_TYPE,
  colorMode: 'dark'
});

Tezos.setWalletProvider({ wallet });
Tezos.setProvider({ wallet });

const network = {
  type: PREFERRED_NETWORK_TYPE,
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


const buy = async(purchaseQuantity) => {
  getNetworkPermission();

  Tezos.wallet
  .at(LEVELS[getCurrentLevel()])
  .then((contract) => contract.methods.buy(4).send({amount: purchaseQuantity, mutez: true})
  .then((op) => {
    console.log(`Awaiting for ${op.hash} to be confirmed...`);
    return op.hash;
  }).then((hash) => {
    console.log(`Operation injected: ${hash}`)
  }).catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`)));

}

const sell = async(amount) => {
  getNetworkPermission();

  const scorer = await Tezos.wallet.at(LEVELS[getCurrentLevel()])
  const wxtz = await Tezos.wallet.at(WXTZ_V1_CONTRACT_HANGZHOUNET)

  const batch = await Tezos.wallet
  .batch()
  .withContractCall(wxtz.methods.approve(scorer.address, 4))
  .withContractCall(scorer.methods.preSell(4))
  .withContractCall(scorer.methods.sell(4))

  const batchOp = await batch.send();
  console.log('Operation hash:', batchOp.hash);
  await batchOp.confirmation();
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
  buy,
  sell
};