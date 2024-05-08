'use client';
import { createTheme } from '@mui/material/styles';
import { Itim } from 'next/font/google';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    minusMd: true; // 新しいブレークポイントを追加
    plusMd: true;
    minusLg: true;
    plusLg: true;
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
      sm: 601,
      minusMd: 1023,
      md: 1024,
      plusMd: 1025,
      minusLg: 1279,
      lg: 1280,
      plusLg: 1281,
      xl: 1920,
    },
  },
});
