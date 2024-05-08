import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { HeaderButton } from '../common/headerButton';

export const Header = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const theme = useTheme();
  const matchesPlusMd = useMediaQuery(theme.breakpoints.up('plusMd'));

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
        minHeight: matchesPlusMd ? '8vh' : '4vh',
        minWidth: '100%',
        position: matchesPlusMd ? 'fixed' : undefined,
        zIndex: '999',
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: matchesPlusMd ? '0px 40px' : '0px 00px',
        justifyContent: matchesPlusMd ? 'space-between' : 'center', // 中央に常に配置
      }}
    >
      {matchesPlusMd ? (
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
