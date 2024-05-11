import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';

const scrollTopPage = () => {
  const aboutThisSiteY =
    document.querySelector('#top-page')?.getBoundingClientRect().top ?? 0;
  window.scrollTo({
    top: window.pageYOffset + aboutThisSiteY - window.innerHeight / 2,
    behavior: 'smooth',
  });
};

export const FooterButton = ({
  backgroundColor,
}: {
  backgroundColor: string;
}): JSX.Element => {
  const ColorAssets = useColorAssets();
  return (
    <Box
      width={'80px'}
      height={'40px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
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
          ':hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Image src={'/dropUp.svg'} alt="arrow-up" width={40} height={40} />
      </IconButton>
    </Box>
  );
};
