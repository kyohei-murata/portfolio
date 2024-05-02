import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

export const AboutMe = (): JSX.Element => {
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
            <Typography fontSize={16} pt={4}>
              --Github:{' '}
              <Link href="https://github.com/kyohei-murata">
                https://github.com/kyohei-murata
              </Link>
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
