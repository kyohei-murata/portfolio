'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { Box, IconButton, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { Controller } from '../ui-kits/controller';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

type Color = string;
export const TopPage = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const aboutThisSiteRef = useRef<HTMLDivElement>(null);
  const topOffset = 50;
  const [backgroundColor, setBackgroundColor] = useState<string>(
    ColorAssets.mainGreen
  );
  const handleClick = (Color: string) => {
    setBackgroundColor(Color);
  };
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
      bgcolor={backgroundColor}
      minHeight={'100vh'}
      py={4}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ '& > :not(style) + :not(style)': { marginTop: '4px' } }}
      id={'top-page'}
    >
      <Typography
        variant="h2"
        align="center"
        color={ColorAssets.textWhite}
        py={2}
        fontWeight={'Bold'}
      >
        {"kyon's lab!"}
      </Typography>
      <Typography variant="h5" align="center" color={ColorAssets.textWhite}>
        KYON Engineering Laboratory
      </Typography>
      <Controller handleClick={handleClick} />
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
        <ArrowDropDownCircleIcon
          sx={{ fontSize: '80px', color: '#D9D9D9' }}
          className="moveUpDown"
        />
      </IconButton>
      {/* AboutThisSiteコンポーネントまでスクロールするための参照 */}
      <div ref={aboutThisSiteRef} />
    </Box>
  );
};
