import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const scrollTopPage = () => {
  const aboutThisSiteY =
    document.querySelector('#top-page')?.getBoundingClientRect().top ?? 0;
  window.scrollTo({
    top: window.pageYOffset + aboutThisSiteY - window.innerHeight / 2,
    behavior: 'smooth',
  });
};

export const Footer = ({
  backgroundColor,
}: {
  backgroundColor: string;
}): JSX.Element => {
  const ColorAssets = useColorAssets();
  return (
    <>
      <Box
        minHeight={'40vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        bgcolor={backgroundColor}
      >
        <Stack
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={6}
        >
          <Typography
            variant="h3"
            color={ColorAssets.textWhite}
            fontWeight={'Bold'}
            id={'my-skills'}
          >
            Thank you for coming!!
          </Typography>
        </Stack>
      </Box>
      <Box
        minHeight={'8vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        bgcolor={
          backgroundColor == ColorAssets.mainGreen
            ? ColorAssets.subGreen
            : backgroundColor == ColorAssets.mainBlue
            ? ColorAssets.subBlue
            : ColorAssets.subRed
        }
        overflow={'visible'}
      >
        <Typography color={ColorAssets.textWhite} pl={'80px'}>
          © 2024 Kyohei Murata
        </Typography>
        <Box
          width="100px"
          height="50px"
          borderRadius="50px 50px 0 0"
          bgcolor={
            backgroundColor == ColorAssets.mainGreen
              ? ColorAssets.subGreen
              : backgroundColor == ColorAssets.mainBlue
              ? ColorAssets.subBlue
              : ColorAssets.subRed
          }
          position={'relative'}
          top={-30}
          sx={{
            ':hover': {
              transform: 'translateY(-10px)',
            },
            transition: 'transform 0.5s ease',
          }}
        >
          <IconButton
            onClick={scrollTopPage}
            sx={{
              // ホバー時のスタイルを直接指定し、ホバー時に何も起きないようにします
              ':hover': {
                backgroundColor: 'transparent',
                // ホバー時のイベントを無効化するスタイルを適用
              },
              top: -10,
            }}
          >
            <Image src={'/dropUp.svg'} alt="arrow-up" width={80} height={80} />
          </IconButton>
        </Box>
        <Typography color={ColorAssets.textWhite} pr={'80px'}>
          出典:Freepik
        </Typography>
      </Box>
    </>
  );
};
