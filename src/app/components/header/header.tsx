import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { HeaderButton } from '../common/headerButton';

export const Header = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const theme = useTheme();
  const CustomBreakpoints = useCustomBreakpoints();
  const logoAdjustment = 20;
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: '100%',
        zIndex: '999',
        backgroundColor: 'rgba(255,255,255,0.6)',
        position: 'fixed',
        minHeight: CustomBreakpoints.matchesPlusMdUp ? '8vh' : '4vh',
        padding: CustomBreakpoints.matchesPlusMdUp ? '0px 40px' : '0px 0px',
        justifyContent: CustomBreakpoints.matchesPlusMdUp
          ? 'space-between'
          : 'center',
      }}
    >
      {CustomBreakpoints.matchesPlusMdUp ? (
        <>
          <Image src="/logo.png" alt="logo" width="60" height="60" />
          <Box display={'flex'} pr={'140px'}>
            <HeaderButton scrollTarget="topPage" text="トップページ" />
            <HeaderButton scrollTarget="aboutMe" text="私について" />
            <HeaderButton scrollTarget="profile" text="経歴" />
            <HeaderButton scrollTarget="contactMe" text="contact me" />
          </Box>
        </>
      ) : (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          position="relative"
        >
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Image src="/logo.png" alt="logo" width="60" height="60" />
          </Box>
        </Box>
      )}
    </Box>
  );
};
