'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import { keyframes } from '@emotion/react';
import { Button } from '@mui/material';

// スタイル付きの丸いボタン
type Props = {
  onClick?: VoidFunction;
  buttonColor: string;
  isAnimation?: boolean;
};

const buttonStyle = (
  buttonColor: string,
  ColorAssets: any,
  isAnimation: boolean | undefined
) => ({
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  minWidth: 'unset',
  color: 'white',
  backgroundColor:
    buttonColor === 'red'
      ? ColorAssets.buttonRed
      : buttonColor === 'green'
      ? ColorAssets.buttonGreen
      : buttonColor === 'blue'
      ? ColorAssets.buttonBlue
      : 'yellow',

  '&:hover': {
    backgroundColor:
      buttonColor === 'red'
        ? ColorAssets.buttonRed
        : buttonColor === 'green'
        ? ColorAssets.buttonGreen
        : buttonColor === 'blue'
        ? ColorAssets.buttonBlue
        : 'yellow',
    animation: `${pulseAnimation} 0.8s infinite`,
  },
  ...(isAnimation && {
    animation: `${pulseAnimation} 1s infinite`,
  }),
});

const pulseAnimation = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
}
5% {
  transform: scale(1.02);
  opacity: 0.9;
}
10% {
  transform: scale(1.05);
  opacity: 0.8;
}
15% {
  transform: scale(1.07);
  opacity: 0.7;
}
20% {
  transform: scale(1.1);
  opacity: 0.6;
}
25% {
  transform: scale(1.12);
  opacity: 0.5;
}
30% {
  transform: scale(1.15);
  opacity: 0.4;
}
35% {
  transform: scale(1.18);
  opacity: 0.3;
}
40% {
  transform: scale(1.21);
  opacity: 0.2;
}
45% {
  transform: scale(1.23);
  opacity: 0.1;
}
50% {
  transform: scale(1.27);
  opacity: 0.05;
}
55% {
  transform: scale(1.28);
  opacity: 0;
}
60% {
  transform: scale(1);
  opacity: 0;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;

export const RgbButton = (props: Props): JSX.Element => {
  const ColorAssets = useColorAssets();

  return (
    <Button
      sx={buttonStyle(props.buttonColor, ColorAssets, props.isAnimation)}
      onClick={props.onClick}
    >
      {props.buttonColor === 'red'
        ? 'R'
        : props.buttonColor === 'green'
        ? 'G'
        : props.buttonColor === 'blue'
        ? 'B'
        : props.isAnimation == true
        ? ' '
        : ' '}
    </Button>
  );
};
