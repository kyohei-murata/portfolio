import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack, Typography } from '@mui/material';
import { CustomizedTimeline } from '../ui-kits/timeLine';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

export const Profile = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  return (
    <>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack display={'flex'} alignItems={'center'} spacing={4}>
          <Typography
            variant="h3"
            color={ColorAssets.textBlack}
            fontWeight={'Bold'}
          >
            Profile
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color={ColorAssets.textBlack}
            id={'profile'}
          >
            私のこれまでの人生をまとめてみました
          </Typography>
          <CustomizedTimeline />
        </Stack>
      </Box>
    </>
  );
};
