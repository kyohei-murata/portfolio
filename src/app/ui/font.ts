'use client';
import { createTheme } from '@mui/material/styles';
import { Itim } from 'next/font/google';

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
});
