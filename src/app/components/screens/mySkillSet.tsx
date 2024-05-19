import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { Box, Stack, Typography } from '@mui/material';

export const MySkillSet = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const CustomBreakpoints = useCustomBreakpoints();
  return (
    <Box
      minHeight={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={'#f8f8f8'}
    >
      <Stack
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={6}
      >
        <Typography
          variant={CustomBreakpoints.matchesMdUp ? 'h3' : 'h4'}
          color={ColorAssets.textBlack}
          fontWeight={'Bold'}
        >
          My Skill Sets
        </Typography>
        <Typography
          fontSize={CustomBreakpoints.matchesMdUp ? '16px' : '14px'}
          align="center"
          style={{ lineHeight: '3.0' }}
          color={ColorAssets.textBlack}
        >
          近日追加予定！
        </Typography>
      </Stack>
    </Box>
  );
};
