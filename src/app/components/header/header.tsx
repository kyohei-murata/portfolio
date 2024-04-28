import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { HeaderButton } from '../common/headerButton';

export const Header = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '10vh',
        minWidth: '100%',
        justifyContent: 'center',
        position: 'fixed',
        zIndex: '999',
        backgroundColor: 'rgba(255,255,255,0.8)',
      }}
    >
      <Stack>
        <Image src="/logo.png" alt="logo" width="80" height="80" />
      </Stack>
      <HeaderButton text="トップページ" />
    </Box>
  );
};
