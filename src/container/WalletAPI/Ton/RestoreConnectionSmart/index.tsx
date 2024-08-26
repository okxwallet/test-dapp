import APIButton from '@/components/common/APIButton';
import CodeBox from '@/components/common/CodeBox';
import Connector from '@/components/common/Connector';
import PreviewLayout from '@/components/common/Layout/PreviewLayout';
import {
  getProviderCodeString,
  Network,
  NetworkSwitch,
} from '@/constants/network';
import { manifestUrl } from '@/constants/Ton';
import { Space } from 'antd';
import { useMemo, useState } from 'react';

export default function RestoreConnectionSmart() {
  const [data, setData] = useState({});
  const onCallback = (result: object) => {
    setData(result);
  };
  const demo = useMemo(() => {
    return `
    // connect to ton first and try me
    try {
      let res = await ${getProviderCodeString(Network.TON)}.tonconnect.restoreConnection();
      console.log(res)
    } catch (e) {
      console.log(e);
    }`;
  }, []);

  return (
    <PreviewLayout previewData={data}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Connector
          networkSwitch={NetworkSwitch.TON}
          onError={onCallback}
          params={[2, { manifestUrl, items: [{ name: 'ton_addr' }] }]}
        />
        <APIButton
          apiName="restoreConnection"
          networkSwitch={NetworkSwitch.TON}
          onCallback={onCallback}
        />
        <CodeBox text={demo} />
      </Space>
    </PreviewLayout>
  );
}