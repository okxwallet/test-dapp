import { getProvider, Network } from '@/constants/network';
import { formatConnectResult } from '@/utils/business/Common/network';
import { notification } from 'antd';
import { useCallback, useState } from 'react';

export interface NetworkType<Provider = any> {
  network?: Network;
  provider?: Provider;
  connectResult?: object | null;
  address?: string; // sign for login or not
  error?: any;
  onDisconnect?: () => void;
}
export type NetworkMapType = {
  [key in Network]: NetworkType;
};

// default network from caller is bitcoin. if there is not provider, means no connected
const NetworkModel = () => {
  const [networks, setNetwork] = useState<NetworkMapType>({} as NetworkMapType);

  const [api] = notification.useNotification();

  const addDisconnectEvent = useCallback((network: Network) => {
    const provider = getProvider(network);
    if (networks[network]?.onDisconnect) {
      return;
    }
    const onDisconnect = () => {
      setNetwork((networks) => ({
        ...networks,
        [network]: {
          ...[networks[network]],
          address: '',
        },
      }));
      // window.okxwallet has not removeEventListener disconnect
    };
    provider.on('disconnect', onDisconnect);
    setNetwork((networks) => ({
      ...networks,
      [network]: {
        ...[networks[network]],
        onDisconnect,
      },
    }));
  }, []);

  const connectNetwork = useCallback(
    async (network: Network) => {
      const provider = getProvider(network);
      if (networks[network]?.address) {
        return;
      }
      try {
        const result = await provider.connect();
        const formatResult = formatConnectResult(network, result);
        addDisconnectEvent(network);
        setNetwork((networks) => ({
          ...networks,
          [network]: {
            address: formatResult.address,
            network,
            provider: provider,
          },
        }));
      } catch (error) {
        setNetwork((networks) => ({
          ...networks,
          [network]: {
            ...[networks[network]],
            error,
          },
        }));
      }
    },
    [setNetwork, api],
  );

  console.log(networks);

  return {
    networks,
    connectNetwork,
  };
};

export default NetworkModel;
