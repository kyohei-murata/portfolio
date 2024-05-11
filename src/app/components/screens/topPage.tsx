'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
import { Controller } from '../ui-kits/controller';
import { PopUpMenuButton } from '../ui-kits/popUpMenuButton';

type Props = {
  backgroundColor: string;
  handleClick: (color: string) => void;
};

export const TopPage = (props: Props): JSX.Element => {
  const ColorAssets = useColorAssets();
  const CustomBreakpoints = useCustomBreakpoints();
  const aboutThisSiteRef = useRef<HTMLDivElement>(null);

  const scrollAboutThisSite = () => {
    const aboutThisSiteY =
      document.querySelector('#about-this-site')?.getBoundingClientRect().top ??
      0;
    window.scrollTo({
      top: window.pageYOffset + aboutThisSiteY - window.innerHeight / 2 + 50,
      behavior: 'smooth',
    });
  };
  return (
    <Box
      bgcolor={props.backgroundColor}
      py={CustomBreakpoints.matchesPlusMdUp ? '4' : '0'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      maxWidth={'100%'}
      sx={{
        '& > :not(style) + :not(style)': { marginTop: '4px' },
        transition: 'background-color 0.5s ease',
      }}
      minHeight={'100vh'}
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
      {CustomBreakpoints.matchesPlusMdUp ? (
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
      ) : (
        <PopUpMenuButton backgroundColor={props.backgroundColor} />
      )}
      <div ref={aboutThisSiteRef} />
    </Box>
  );
};
