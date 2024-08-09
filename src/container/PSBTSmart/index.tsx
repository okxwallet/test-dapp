import PreviewBox from '@/components/common/PreviewBox';
import { formatTxHash } from '@/utils/business/Common';
import { ConnectButton, Connector } from '@ant-design/web3';
import { WalletColorful } from '@ant-design/web3-icons';
import {
  Button,
  Col,
  Input,
  InputNumber,
  Layout,
  Row,
  Select,
  Typography,
} from 'antd';
import React, { useMemo } from 'react';
import usePsbt from './hooks/usePsbt';
import styles from './index.less';

const InputItem = ({ inputItem, updateInput, addInput, subInput, index }) => {
  const onTxidChange = (e) => {
    const txid = e.target.value;
    updateInput(index, {
      ...inputItem,
      txid,
    });
  };
  const onVoutChange = (vout) => {
    updateInput(index, {
      ...inputItem,
      vout,
    });
  };
  return (
    <Row>
      <div className={styles.flexBox}>
        {index + 1}.
        <Input
          value={inputItem.txid}
          onChange={onTxidChange}
          placeholder="填写txid"
          className={styles.input}
        />
        <InputNumber
          value={inputItem.vout}
          onChange={onVoutChange}
          placeholder="填写vout"
          controls={false}
          className={styles.input}
        />
        <Button
          onClick={() => {
            addInput(index);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            subInput(index);
          }}
        >
          -
        </Button>
      </div>
    </Row>
  );
};

const OutputItem = ({
  outputItem,
  updateOutput,
  index,
  addOutput,
  subOutput,
}) => {
  const onAddressChange = (e) => {
    const address = e.target.value;
    updateOutput(index, {
      ...outputItem,
      address,
    });
  };
  const onValueChange = (value) => {
    updateOutput(index, {
      ...outputItem,
      value,
    });
  };
  return (
    <Row>
      <div className={styles.flexBox}>
        {index + 1}.
        <Input
          value={outputItem.address}
          onChange={onAddressChange}
          placeholder="填写地址"
          className={styles.input}
        />
        <InputNumber
          value={outputItem.value}
          onChange={onValueChange}
          placeholder="填写数量(sats)"
          controls={false}
          className={styles.input}
        />
        <Button
          onClick={() => {
            addOutput(index);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            subOutput(index);
          }}
        >
          -
        </Button>
      </div>
    </Row>
  );
};

// 脚手架示例组件
const PSBTSmart: React.FC = () => {
  const {
    utxoList,
    setSelectedUtxo,
    addedInput,
    addInput,
    subInput,
    updateInput,
    outputList,
    addOutput,
    subOutput,
    updateOutput,
    signedPsbt,
    getSignedPsbt,
    psbt,
    broadcastTx,
  } = usePsbt();

  const utxoOptions = useMemo(() => {
    const options = utxoList.map((item, index) => {
      return {
        label: `${formatTxHash(item.txid)} index${item.vout} ${item.value}sats`,
        value: index,
        current: item,
      };
    });
    return options;
  }, [utxoList]);

  const searchUtxo = (input, option) => {
    const included =
      option.current.txid.includes(input) ||
      option.current.value.toString().includes(input);
    return included;
  };

  const onSelect = (value: number[]) => {
    const selectedUtxo = value.map((index) => {
      return utxoList[index];
    });
    setSelectedUtxo(selectedUtxo);
  };

  const signAble = !!psbt;

  const broadcastAble = !!signedPsbt;

  const previewData = useMemo(() => {
    return {
      psbt,
      signedPsbt,
    };
  }, [psbt, signedPsbt]);

  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          快速构建 PSBT!
        </Typography.Title>
      </Row>
      <Row className={styles.connector}>
        <Connector
          modalProps={{
            group: false,
            mode: 'simple',
          }}
        >
          <ConnectButton icon={<WalletColorful />} />
        </Connector>
      </Row>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <Row gutter={[0, 10]}>
            <Col span={24}>
              <Typography.Title level={4} className={styles.subTitle}>
                1.选择UTXO
              </Typography.Title>
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={onSelect}
                options={utxoOptions}
                filterOption={searchUtxo}
              />
            </Col>
            <Col span={24}>
              <div className={styles.flexBox}>
                <Typography.Title level={4} className={styles.subTitle}>
                  2.手动选择输入（可选）
                </Typography.Title>
                <Button onClick={addInput}>+</Button>
              </div>
              {addedInput.map((inputItem, index) => {
                return (
                  <InputItem
                    inputItem={inputItem}
                    updateInput={updateInput}
                    index={index}
                    key={`${inputItem.txid}${inputItem.vout}${index}`}
                    addInput={addInput}
                    subInput={subInput}
                  />
                );
              })}
            </Col>
            <Col span={24}>
              <div className={styles.flexBox}>
                <Typography.Title level={4} className={styles.subTitle}>
                  3.设置输出UTXO
                </Typography.Title>
                <Button onClick={addOutput}>+</Button>
              </div>
              {outputList.map((outputItem, index) => {
                return (
                  <OutputItem
                    outputItem={outputItem}
                    updateOutput={updateOutput}
                    addOutput={addOutput}
                    subOutput={subOutput}
                    index={index}
                    key={`${outputItem.address}${outputItem.value}${index}`}
                  />
                );
              })}
            </Col>
            <Col span={24}>
              <Typography.Title level={4} className={styles.subTitle}>
                4.签名PSBT
              </Typography.Title>
              <Button onClick={getSignedPsbt} disabled={!signAble}>
                签名
              </Button>
            </Col>
            <Col span={24}>
              <Typography.Title level={4} className={styles.subTitle}>
                5.广播PSBT
              </Typography.Title>
              <Button onClick={broadcastTx} disabled={!broadcastAble}>
                广播
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <PreviewBox value={previewData} />
          {/* <Typography.Title level={4} className={styles.subTitle}>
            预览结果
          </Typography.Title> */}
          {/* <Col span={24}>
            <Typography.Title level={5} className={styles.subTitle}>
              PSBT:
            </Typography.Title>
            <Typography.Paragraph
              copyable
              ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
            >
              {psbt}
            </Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Typography.Title level={5} className={styles.subTitle}>
              signedPsbt:
            </Typography.Title>
            <Typography.Paragraph
              copyable
              ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
            >
              {signedPsbt}
            </Typography.Paragraph>
          </Col> */}
        </Col>
      </Row>
    </Layout>
  );
};

export default PSBTSmart;
