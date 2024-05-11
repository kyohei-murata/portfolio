import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { Box, Stack, Typography } from '@mui/material';

export const AboutThisSite = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const CustomBreakPoints = useCustomBreakpoints();

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
          variant={CustomBreakPoints.matchesMdUp ? 'h3' : 'h4'}
          color={ColorAssets.textBlack}
          fontWeight={'Bold'}
        >
          About This Site
        </Typography>
        {CustomBreakPoints.matchesMdUp ? (
          <Typography
            fontSize={'16px'}
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
            fontSize={'14px'}
            align="center"
            style={{ lineHeight: '3.0' }}
            color={ColorAssets.textBlack}
            id="about-this-site"
            maxWidth={CustomBreakPoints.matchesSmUp ? '60%' : '80%'}
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
