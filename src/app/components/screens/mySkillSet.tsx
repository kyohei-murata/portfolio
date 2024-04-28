import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack, Typography } from '@mui/material';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

export const MySkillSet = (): JSX.Element => {
  const ColorAssets = useColorAssets();
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
          variant="h3"
          color={ColorAssets.textBlack}
          fontWeight={'Bold'}
        >
          My Skill Sets
        </Typography>
      </Stack>
    </Box>
  );
};
