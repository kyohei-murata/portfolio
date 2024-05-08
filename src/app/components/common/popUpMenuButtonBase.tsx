import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  position: 'relative' | 'absolute';
  left?: number;
  top?: number;
  zIndex?: number;
  rotate?: string;
  onClick?: MouseEventHandler;
  isHover?: boolean;
  backgroundColor: string;
};

export const PopUpMenuButtonBase = (props: Props): JSX.Element => {
  const { children, position, left, top, zIndex, rotate, onClick } = props;
  const ColorAssets = useColorAssets();
  const backgroundColor =
    props.backgroundColor == ColorAssets.mainGreen
      ? '#c74d5b'
      : props.backgroundColor == ColorAssets.mainBlue
      ? '#ffbe5c'
      : '#6bcfd9';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: position,
        left: left,
        top: top,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        cursor: 'pointer',
        transition: '0.4s',
        zIndex: zIndex,
        transform: rotate,
        opacity: props.isHover ? 0.8 : 1.0,
      }}
      onClick={props.onClick}
    >
      {children}
    </Box>
  );
};
