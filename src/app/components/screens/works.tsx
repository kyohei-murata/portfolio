import { useColorAssets } from '@/hooks/view/useColorAssets';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

export const Works = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const images = [
    { url: '/entech_2.png', title: 'entech' },
    { url: '/kyonLab.png', title: "kyon's lab" },
    { url: '/ComingSoon.png', title: 'coming soon...' },
  ];
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
          Works
        </Typography>
        <ImageList cols={3} rowHeight={200} gap={40}>
          {images.map((item) => (
            <ImageListItem key={item.url}>
              <div
                style={{ borderRadius: '10%', overflow: 'hidden', height: 140 }}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  width={230}
                  height={140}
                  quality={100}
                />
              </div>
              <ImageListItemBar
                title={
                  <Typography
                    variant={'subtitle1'}
                    color={ColorAssets.textBlack}
                  >
                    {item.title}
                  </Typography>
                }
                sx={{
                  backgroundColor: 'transparent',
                  textAlign: 'center',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
};
