import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack, Typography } from '@mui/material';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

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
          ここはエンジニアKyonのポートフォリオサイトです
          <br />
          これまでに手がけた制作物、身につけたスキルをまとめています。
          <br />
          あなたに、私のことをもっと深く知って欲しいと思って作りました。
          <br />
          どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
        </Typography>
      </Stack>
    </Box>
  );
};
