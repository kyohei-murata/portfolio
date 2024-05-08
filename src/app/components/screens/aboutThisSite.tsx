import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

export const AboutThisSite = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const theme = useTheme();
  const matchesPlusMd = useMediaQuery(theme.breakpoints.up('plusMd'));
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

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
          variant={useMediaQuery(theme.breakpoints.up('md')) ? 'h3' : 'h4'}
          color={ColorAssets.textBlack}
          fontWeight={'Bold'}
        >
          About This Site
        </Typography>
        {matchesPlusMd ? (
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
        ) : (
          <Typography
            variant="body2"
            align="center"
            style={{ lineHeight: '3.0' }}
            color={ColorAssets.textBlack}
            id="about-this-site"
            maxWidth={matchesSm ? '60%' : '80%'}
            sx={{
              textJustify: 'inter-ideograph',
            }}
          >
            ここはマーケター兼エンジニアKyonのポートフォリオサイトです。
            これまでに手がけた制作物、身につけたスキルをまとめています。
            今はまだ少ないですが、これからどんどん増やせるよう頑張ります。
            どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
          </Typography>
        )}
      </Stack>
    </Box>
  );
};
