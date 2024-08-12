import APIButton from '@/components/common/APIButton';
import CodeBox from '@/components/common/CodeBox';
import Connector from '@/components/common/Connector';
import PreviewBox from '@/components/common/PreviewBox';
import { Col, Input, Row, Space } from 'antd';
import React, { useMemo, useState } from 'react';

const SignPsbtSmart: React.FC = () => {
  const [result, setResult] = useState({});
  const [psbt, setPsbt] = useState('');
  const onCallback = async (result: object) => {
    setResult(result);
  };
  const onChange = (e) => {
    setPsbt(e.target.value);
  };

  const demo = useMemo(() => {
    const needSignPsbt = psbt ? `${psbt}` : '70736274ff01007d....';
    return `try {
  let res = await okxwallet.bitcoin.signPsbt(
  '${needSignPsbt}'
  );
  console.log(res)
} catch (e) {
  console.log(e);
}`;
  }, [psbt]);
  return (
    <Row justify="space-between">
      <Col span={10}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Row>
            <Connector onError={onCallback} />
          </Row>
          <Input value={psbt} onChange={onChange} placeholder="填写PSBT" />
          <APIButton
            apiName="signPsbt"
            onCallback={onCallback}
            params={[psbt]}
          />
          <CodeBox text={demo} />
        </Space>
      </Col>
      <Col span={12}>
        <PreviewBox value={result} />
      </Col>
    </Row>
  );
};

export default SignPsbtSmart;
