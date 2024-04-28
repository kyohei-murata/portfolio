type ColorAssetsType = {
  mainGreen: string;
  mainBlue: string;
  mainRed: string;
  textBlack: string;
  textWhite: string;
  buttonRed: string;
  buttonGreen: string;
  buttonBlue: string;
};

export const useColorAssets = (): ColorAssetsType => {
  const mainGreen = '#4dc7b9';
  const mainBlue = '#5c9dff';
  const mainRed = '#ff6f61';
  const textBlack = '#333333';
  const textWhite = '#ffffff';
  const buttonRed = '#ED929F';
  const buttonGreen = '#79C6B6';
  const buttonBlue = '#90CAF9';
  return {
    mainGreen,
    mainBlue,
    mainRed,
    textBlack,
    textWhite,
    buttonBlue,
    buttonGreen,
    buttonRed,
  };
};
