import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { Box, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const AboutMe = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const CustomBreakPoints = useCustomBreakpoints();
  return (
    <>
      {CustomBreakPoints.matchesMdUp ? (
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
              variant={CustomBreakPoints.matchesMdUp ? 'h3' : 'h4'}
              color={ColorAssets.textBlack}
              fontWeight={'Bold'}
            >
              About Me
            </Typography>
            <Stack
              direction={'row'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              spacing={8}
            >
              <Image
                style={{ paddingBottom: '24px' }}
                src={'/IMG_2997.JPG'}
                alt="About Me"
                width={160}
                height={160}
              />
              <Typography
                variant="body1"
                align="center"
                style={{ lineHeight: '2.5' }}
                color={ColorAssets.textBlack}
                id={'about-me'}
                maxWidth={'360px'}
                textAlign={'left'}
              >
                埼玉県出身のマーケター、エンジニアもどき。　　　高校では情報通信科、大学では情報学科に入学し
                <br />
                情報学 について広く浅く学んだ。
                <br />
                マーケターとしては1年間スタートアップでTikTokの運用を行い、エンジニアとしてはReact,Typescriptの
                開発を1年ほど独学で学び、　　学校ではPython,Cを触ってきた。
                <br />
                <span style={{ fontSize: '14px' }}>
                  --Github:
                  <Link href="https://github.com/kyohei-murata">
                    https://github.com/kyohei-murata
                  </Link>
                </span>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Box
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          bgcolor={'#f8f8f8'}
        >
          <Stack alignItems={'center'} justifyContent={'center'} spacing={6}>
            <Typography
              variant={CustomBreakPoints.matchesMdUp ? 'h3' : 'h4'}
              color={ColorAssets.textBlack}
              fontWeight={'Bold'}
            >
              About Me
            </Typography>
            <Stack
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              spacing={4}
              width={'80%'}
            >
              <Image
                style={{ paddingBottom: '24px' }}
                src={'/IMG_2997.JPG'}
                alt="About Me"
                width={130}
                height={130}
              />
              <Typography
                variant={CustomBreakPoints.matchesXsDown ? 'body2' : 'body1'}
                align="left"
                style={{ lineHeight: '2.5' }}
                color={ColorAssets.textBlack}
                id={'about-me'}
                maxWidth={'360px'}
                textAlign={'left'}
              >
                埼玉県出身のマーケター、エンジニアもどき。高校では情報通信科、大学では情報学科に入学し
                情報学 について広く浅く学んだ。
                マーケターとしては1年間スタートアップでTikTokの運用を行い、エンジニアとしてはReact,Typescriptの
                開発を1年ほど独学で学び、学校ではPython,Cを触ってきた。
                <br />
                <span style={{ fontSize: '14px' }}>
                  --Github:{' '}
                  <Link href="https://github.com/kyohei-murata">
                    https://github.com/kyohei-murata
                  </Link>
                </span>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      )}
    </>
  );
};
