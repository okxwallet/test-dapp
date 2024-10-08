import { NetworkSwitch } from '@/constants/network';
import { convertBTCLibNetwork } from '@/utils/business/BTC/network';

import {
  getCurInputs,
  getExtractTx,
  getPsbt,
  pushPsbt,
  signPsbt,
} from '@/utils/business/BTC/psbt/index';
import { getUTXOsFrom } from '@/utils/mempool/utxo';
import { useModel } from '@umijs/max';
import { useCallback, useEffect, useMemo, useState } from 'react';

const usePsbt = () => {
  const { switchNetworkName } = useModel('SwitchNetworkModel', (model) => ({
    switchNetworkName: model.networkSwitches[NetworkSwitch.BTC],
  }));
  const { network } = useModel('NetworkModel', (model) => ({
    network: model.networks[switchNetworkName],
  }));

  const [utxoList, setUtxoList] = useState([]);
  const [selectedUtxo, setSelectedUtxo] = useState([]);
  const [addedInput, setAddedInput] = useState([]); // manually edit
  const [outputList, setOutputList] = useState([]);
  const [curInputs, setCurInputs] = useState([]); // all inputs with data that psbt needs
  const [signedPsbt, setSignedPsbt] = useState('');
  const [finalized, setFinalized] = useState(false);
  const [rawTx, setRawTx] = useState('');
  const [txId, setTxid] = useState('');

  useEffect(() => {
    const getUtxoList = async () => {
      if (network && network.address) {
        const utxos = await getUTXOsFrom(network.network, network.address);
        setUtxoList(utxos);
      }
    };
    getUtxoList();
  }, [network]);

  // addedInput: manually input, maybe other's input
  useEffect(() => {
    try {
      getCurInputs(network?.network, selectedUtxo.concat(addedInput)).then(
        (inputs) => {
          setCurInputs(inputs);
        },
      );
    } catch (err) {
      console.error(err);
    }
  }, [selectedUtxo, addedInput]);

  const addInput = (index) => {
    const pointer = index === undefined ? addedInput.length : index + 1;
    const newAddedInput = [...addedInput];
    newAddedInput.splice(pointer, 0, {
      key: new Date().getTime(),
    });
    setAddedInput(newAddedInput);
  };

  const subInput = (index) => {
    const newAddedInput = [...addedInput];
    newAddedInput.splice(index, 1);
    setAddedInput(newAddedInput);
  };

  const updateInput = (index, input) => {
    const newAddedInput = [...addedInput];
    newAddedInput[index] = input;
    setAddedInput(newAddedInput);
  };

  const addOutput = (index) => {
    const pointer = index === undefined ? outputList.length - 1 : index;
    const newOutputList = [...outputList];
    newOutputList.splice(pointer + 1, 0, {
      key: new Date().getTime(),
    });
    setOutputList(newOutputList);
  };
  const subOutput = (index) => {
    const newOutputList = [...outputList];
    newOutputList.splice(index, 1);
    setOutputList(newOutputList);
  };
  const updateOutput = (index, output) => {
    const newOutputList = [...outputList];
    newOutputList[index] = output;
    setOutputList(newOutputList);
  };

  const psbt = useMemo(() => {
    const inputValid = curInputs.length > 0;
    if (inputValid) {
      try {
        return getPsbt(
          curInputs,
          outputList,
          convertBTCLibNetwork(network.network),
        );
      } catch (err) {
        return err;
      }
    } else {
      return '';
    }
  }, [curInputs, outputList]);

  useEffect(() => {
    setSignedPsbt('');
  }, [psbt]);

  const getSignedPsbt = useCallback(async () => {
    setSignedPsbt(await signPsbt(network?.provider, psbt));
    setFinalized(true);
  }, [psbt, network?.provider]);

  const getSignedPsbtWithoutFinalize = useCallback(async () => {
    setSignedPsbt(
      await signPsbt(network?.provider, psbt, {
        autoFinalized: false,
      }),
    );
    setFinalized(false);
  }, [psbt, network?.provider]);

  const extractTx = useCallback(async () => {
    if (signedPsbt) {
      const rawTx = await getExtractTx(
        signedPsbt,
        convertBTCLibNetwork(network.network),
      );
      setRawTx(rawTx);
    }
  }, [signedPsbt]);

  const broadcastTx = useCallback(async () => {
    if (signedPsbt) {
      const curTxId = await pushPsbt(network?.provider, signedPsbt);
      setTxid(curTxId);
    }
  }, [signedPsbt]);

  return {
    utxoList,
    selectedUtxo,
    setSelectedUtxo,
    outputList,
    addedInput,
    addInput,
    subInput,
    updateInput,
    addOutput,
    subOutput,
    updateOutput,
    psbt,
    signedPsbt,
    getSignedPsbt,
    rawTx,
    extractTx,
    broadcastTx,
    getSignedPsbtWithoutFinalize,
    finalized,
    txId,
  };
};
export default usePsbt;
