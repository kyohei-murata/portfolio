'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
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

  const ColorAssets = useColorAssets();
  const CustomBreakpoints = useCustomBreakpoints();
  return (
    <Box
      minHeight={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {CustomBreakpoints.matchesMdUp ? (
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
            <Card
              sx={{ maxWidth: 300 }}
              onClick={() => {
                window.location.href = 'https://entech.vercel.app/'; // ここに遷移したいURLを指定します
              }}
            >
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

            <Card
              sx={{ maxWidth: 300 }}
              onClick={() => {
                window.location.href = 'https://pico-web.web.app/'; // ここに遷移したいURLを指定します
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/PICO.png"
                  alt="PICO"
                  sx={{
                    borderBottom: '2px solid #ccc', // 👈 ここで下線
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    PICO
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    親子向けのAI会話ロボットアプリPiCOのプロトタイプです。(web版)
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
                  image="/tabemiru.png"
                  alt="tabemiru"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    tabemiru
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    摂取カロリーと栄養素を計算するアプリです。現在開発中。
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
                  height={CustomBreakpoints.matchesSmDown ? '70' : '100'}
                  image="/entech.png"
                  alt="entech"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize={CustomBreakpoints.matchesSmDown ? '16px' : '24px'}
                    component="div"
                  >
                    entech
                  </Typography>
                  <Typography
                    fontSize={CustomBreakpoints.matchesSmDown ? '8px' : '16px'}
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
                  height={CustomBreakpoints.matchesSmDown ? '70' : '100'}
                  image="/kyonLab.png"
                  alt="kyonLab"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize={CustomBreakpoints.matchesSmDown ? '16px' : '24px'}
                    component="div"
                  >
                    kyon's Lab
                  </Typography>
                  <Typography
                    fontSize={CustomBreakpoints.matchesSmDown ? '8px' : '16px'}
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
                  height={CustomBreakpoints.matchesSmDown ? '70' : '100'}
                  image="/tabemiru.png"
                  alt="tabemiru"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize={CustomBreakpoints.matchesSmDown ? '16px' : '24px'}
                    component="div"
                  >
                    tabemiru
                  </Typography>
                  <Typography
                    fontSize={CustomBreakpoints.matchesSmDown ? '8px' : '16px'}
                    color="text.secondary"
                  >
                    摂取カロリーと栄養素を計算するアプリです。現在開発中。
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
