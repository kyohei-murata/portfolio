import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box } from '@mui/material';
import Image from 'next/image';
import { HeaderButton } from '../common/headerButton';

export const Header = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '4vh',
        minWidth: '100%',
        position: 'fixed',
        zIndex: '999',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: '0px 0px',
      }}
    >
      <Box display={'flex'} justifyContent={'flex-start'} pl={'140px'}>
        <Image src="/logo.png" alt="logo" width="60" height="60" />
      </Box>
      <Box display={'flex'} pr={'140px'}>
        <HeaderButton scrollTarget="topPage" text="トップページ" />
        <HeaderButton scrollTarget="aboutMe" text="私について" />
        <HeaderButton scrollTarget="profile" text="経歴" />
        <HeaderButton scrollTarget="contactMe" text="contact me" />
      </Box>
    </Box>
  );
};
