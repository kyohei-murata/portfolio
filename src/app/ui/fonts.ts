'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
