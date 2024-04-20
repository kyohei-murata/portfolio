

type ColorAssetsType = {
    mainGreen: string;
    textBlack: string;
    textWhite: string;
}

export const useColorAssets = (): ColorAssetsType => {
    const mainGreen = "#33cccc"
    const textBlack = "#333333"
    const textWhite = "#ffffff"
    return {
        mainGreen,
        textBlack,
        textWhite
    }
}