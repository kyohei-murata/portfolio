import { Button } from '@mui/material';

type props = {
  text: string;
};
const topOffset = 0;
const scrollTopPage = () => {
  // AboutThisSiteコンポーネントの上端からのY座標を取得
  const topPageY =
    document.querySelector('#top-page')?.getBoundingClientRect().top ?? 0;
  // ウィンドウのスクロール位置を設定
  window.scrollTo({
    top: window.pageYOffset + topPageY - window.innerHeight / 2 + topOffset,
    behavior: 'smooth',
  });
};

export const HeaderButton = (Props: props): JSX.Element => {
  return <Button>{Props.text}</Button>;
};
