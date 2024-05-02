import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack, Typography } from '@mui/material';

export const AboutThisSite = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  return (
    <Box
      minHeight={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
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
          About This Site
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ lineHeight: '3.0' }}
          color={ColorAssets.textBlack}
          id="about-this-site"
        >
          ここはマーケター兼エンジニアKyonのポートフォリオサイトです
          <br />
          これまでに手がけた制作物、身につけたスキルをまとめています。
          <br />
          今はまだ少ないですが、これからどんどん増やせるよう頑張ります。
          <br />
          どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
        </Typography>
      </Stack>
    </Box>
  );
};
