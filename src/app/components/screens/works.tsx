'use client';
import { theme } from '@/app/ui/font';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

export const Works = (): JSX.Element => {
  const scrollTopPage = () => {
    const topPageY =
      document.querySelector('#top-page')?.getBoundingClientRect().top ?? 0;
    window.scrollTo({
      top: window.pageYOffset + topPageY - window.innerHeight / 2,
      behavior: 'smooth',
    });
  };
  const matchesPlusMd = useMediaQuery(theme.breakpoints.up('plusMd'));
  const ColorAssets = useColorAssets();
  return (
    <Box
      minHeight={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {matchesPlusMd ? (
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
        </Stack>
      ) : (
        <Stack
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={6}
        >
          <Typography
            variant="h4"
            color={ColorAssets.textBlack}
            fontWeight={'Bold'}
          >
            Works
          </Typography>
          <Stack spacing={'20px'}>
            <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={
                    useMediaQuery(theme.breakpoints.down('sm')) ? '70' : '100'
                  }
                  image="/entech.png"
                  alt="entech"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize={
                      useMediaQuery(theme.breakpoints.down('sm'))
                        ? '16px'
                        : '24px'
                    }
                    component="div"
                  >
                    entech
                  </Typography>
                  <Typography
                    fontSize={
                      useMediaQuery(theme.breakpoints.down('sm'))
                        ? '8px'
                        : '16px'
                    }
                    color="text.secondary"
                  >
                    何かを作りたい学生たちが仲間を募るサービスのデモです。
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 280 }} onClick={scrollTopPage}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={
                    useMediaQuery(theme.breakpoints.down('sm')) ? '70' : '100'
                  }
                  image="/kyonLab.png"
                  alt="kyonLab"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize={
                      useMediaQuery(theme.breakpoints.down('sm'))
                        ? '16px'
                        : '24px'
                    }
                    component="div"
                  >
                    kyon's Lab
                  </Typography>
                  <Typography
                    fontSize={
                      useMediaQuery(theme.breakpoints.down('sm'))
                        ? '8px'
                        : '16px'
                    }
                    color="text.secondary"
                  >
                    エンジニア、マーケターである私のポートフォリオサイトです。
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={
                    useMediaQuery(theme.breakpoints.down('sm')) ? '70' : '100'
                  }
                  image="/ComingSoon.png"
                  alt="comingsoon"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize={
                      useMediaQuery(theme.breakpoints.down('sm'))
                        ? '16px'
                        : '24px'
                    }
                    component="div"
                  >
                    Coming Soon..
                  </Typography>
                  <Typography
                    fontSize={
                      useMediaQuery(theme.breakpoints.down('sm'))
                        ? '8px'
                        : '16px'
                    }
                    color="text.secondary"
                  >
                    今後の作品をお楽しみに！
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
