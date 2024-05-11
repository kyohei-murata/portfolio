'use client';
import { createTheme } from '@mui/material/styles';
import { Itim } from 'next/font/google';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    minusMd: true; // 新しいブレークポイントを追加
    plusMd: true;
  }
}

const itim = Itim({
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: ['itim', 'Noto Sans JP'].join(','),
  },
  breakpoints: {
    values: {
      xs: 401,
      sm: 601, //smart phone
      minusMd: 1023,
      md: 1024, //ipad pro
      plusMd: 1025,
      lg: 1280, //laptop
      xl: 1920,
    },
  },
});
