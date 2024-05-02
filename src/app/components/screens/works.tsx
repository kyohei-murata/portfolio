'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

export const Works = (): JSX.Element => {
  const scrollTopPage = () => {
    const topPageY =
      document.querySelector('#top-page')?.getBoundingClientRect().top ?? 0;
    window.scrollTo({
      top: window.pageYOffset + topPageY - window.innerHeight / 2,
      behavior: 'smooth',
    });
  };
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
          Works
        </Typography>
        <Stack direction={'row'} spacing={'20px'}>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/entech.png"
                alt="entech"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  entech
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  何かを作りたい学生たちが仲間を募る　　サービスのデモです。
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 300 }} onClick={scrollTopPage}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/kyonLab.png"
                alt="kyonLab"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  kyon's Lab
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  エンジニア、マーケターである私の　　　ポートフォリオサイトです。
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/ComingSoon.png"
                alt="comingsoon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Coming Soon..
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  今後の作品をお楽しみに！　　　　　　　　　　　
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        {/* 
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
        </ImageList> */}
      </Stack>
    </Box>
  );
};
