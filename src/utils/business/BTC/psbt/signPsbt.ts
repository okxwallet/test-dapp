export const signPsbt = async (psbtHex: string, options) => {
  //如果要支持多钱包就在这里传provider
  const provider = window.okxwallet.bitcoin;
  const signedPsbt = await provider.signPsbt(psbtHex, options);
  return signedPsbt;
};
