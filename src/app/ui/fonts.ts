'use client';
import { createTheme } from '@mui/material/styles';
import { M_PLUS_1p, Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const mPlus = M_PLUS_1p({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: [roboto.style.fontFamily, mPlus.style.fontFamily].join(','), // 複数のフォントをカンマで区切って指定します
  },
});

export default theme;
