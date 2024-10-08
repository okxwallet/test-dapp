import PushTxSmart from '@/container/WalletAPI/BTC/PushTxSmart';
import { PageContainer } from '@ant-design/pro-components';

const PushTxPage: React.FC = () => {
  return (
    <PageContainer ghost>
      <PushTxSmart />
    </PageContainer>
  );
};

export default PushTxPage;
