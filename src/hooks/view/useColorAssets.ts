type ColorAssetsType = {
  mainGreen: string;
  mainBlue: string;
  mainRed: string;
  subGreen: string;
  subBlue: string;
  subRed: string;
  textBlack: string;
  textWhite: string;
  buttonRed: string;
  buttonGreen: string;
  buttonBlue: string;
};

export const useColorAssets = (): ColorAssetsType => {
  const mainGreen = '#4dc7b9';
  const mainBlue = '#5c9dff';
  const mainRed = '#ff8a7e';
  const subGreen = '#46b1a9';
  const subBlue = '#548ecc';
  const subRed = '#ff6f61';
  const textBlack = '#333333';
  const textWhite = '#ffffff';
  const buttonRed = '#ED929F';
  const buttonGreen = '#79C6B6';
  const buttonBlue = '#90CAF9';
  return {
    mainGreen,
    mainBlue,
    mainRed,
    subGreen,
    subBlue,
    subRed,
    textBlack,
    textWhite,
    buttonBlue,
    buttonGreen,
    buttonRed,
  };
};
