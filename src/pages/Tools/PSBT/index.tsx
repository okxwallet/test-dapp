import PSBTSmart from '@/container/PSBTSmart';
import { PageContainer } from '@ant-design/pro-components';
import { BitcoinWeb3ConfigProvider, OkxWallet } from '@ant-design/web3-bitcoin';

const PSBTPage: React.FC = () => {
  return (
    <PageContainer ghost>
      <BitcoinWeb3ConfigProvider autoConnect wallets={[OkxWallet()]}>
        <PSBTSmart />
      </BitcoinWeb3ConfigProvider>
    </PageContainer>
  );
};

export default PSBTPage;
