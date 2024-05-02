'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
import { Controller } from '../ui-kits/controller';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

type HandleClick = (color: string) => void;

type Props = {
  backgroundColor: string;
  handleClick: (color: string) => void;
};

export const TopPage = (props: Props): JSX.Element => {
  const ColorAssets = useColorAssets();
  const aboutThisSiteRef = useRef<HTMLDivElement>(null);
  const topOffset = 50;

  const scrollAboutThisSite = () => {
    // AboutThisSiteコンポーネントの上端からのY座標を取得
    const aboutThisSiteY =
      document.querySelector('#about-this-site')?.getBoundingClientRect().top ??
      0;
    // ウィンドウのスクロール位置を設定
    window.scrollTo({
      top:
        window.pageYOffset +
        aboutThisSiteY -
        window.innerHeight / 2 +
        topOffset,
      behavior: 'smooth',
    });
  };
  return (
    <Box
      bgcolor={props.backgroundColor}
      minHeight={'100vh'}
      py={4}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        '& > :not(style) + :not(style)': { marginTop: '4px' },
        transition: 'background-color 0.5s ease',
      }}
      id={'top-page'}
    >
      <Typography
        variant="h2"
        align="center"
        color={ColorAssets.textWhite}
        py={2}
        fontWeight={'Bold'}
      >
        {"kyon's Lab!"}
      </Typography>
      <Typography variant="h5" align="center" color={ColorAssets.textWhite}>
        kyon Engineering Laboratory
      </Typography>
      <Controller handleClick={props.handleClick} />
      <IconButton
        onClick={scrollAboutThisSite}
        sx={{
          // ホバー時のスタイルを直接指定し、ホバー時に何も起きないようにします
          ':hover': {
            backgroundColor: 'transparent',
            // ホバー時のイベントを無効化するスタイルを適用
          },
        }}
      >
        <Image
          src={'/dropDown.svg'}
          alt="arrow-down"
          width={80}
          height={80}
          className="moveUpDown"
        />
      </IconButton>
      {/* AboutThisSiteコンポーネントまでスクロールするための参照 */}
      <div ref={aboutThisSiteRef} />
    </Box>
  );
};
