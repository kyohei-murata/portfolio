import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack, Typography } from '@mui/material';
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
          spacing={4}
        >
          <Image
            src={'/IMG_2997.JPG'}
            alt="About Me"
            width={150}
            height={150}
          />
          <Typography
            variant="body1"
            align="center"
            style={{ lineHeight: '2.5' }}
            color={ColorAssets.textBlack}
            id={'about-me'}
          >
            埼玉県出身のエンジニア。高校では情報通信に入り
            <br />
            主にC言語と、情報配線施行についてを学び新潟の
            <br />
            開志専門職大学で広く浅く情報学部ついて学んだ。
            <br />
            エンジニアとしてはNext.jsを使ったReact,Typescript
            <br />
            の開発を1年ほど経験する。1年間スタートアップ企業で
            <br />
            マーケティングを担当し、SNS運営を行った。
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
