import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { Box, Stack, Typography } from '@mui/material';
import { FooterButton } from '../ui-kits/footerButton';

export const Footer = ({
  backgroundColor,
}: {
  backgroundColor: string;
}): JSX.Element => {
  const ColorAssets = useColorAssets();
  const CustomBreakpoints = useCustomBreakpoints();
  return (
    <>
      <Box
        height={
          CustomBreakpoints.matchesPlusMdUp
            ? '40vh'
            : CustomBreakpoints.matchesSmDown
            ? '15vh'
            : '20vh'
        }
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
            fontSize={
              CustomBreakpoints.matchesMdUp
                ? '60px'
                : CustomBreakpoints.matchesSmDown
                ? '20px'
                : '48px'
            }
            color={ColorAssets.textWhite}
            fontWeight={'Bold'}
            id={'my-skills'}
          >
            Thank you for coming!!
          </Typography>
        </Stack>
      </Box>
      <Box
        minHeight={
          CustomBreakpoints.matchesPlusMdUp
            ? '1vh'
            : CustomBreakpoints.matchesSmDown
            ? '2vh'
            : '4vh'
        }
        display={'flex'}
        justifyContent={'center'}
        bgcolor={
          backgroundColor == ColorAssets.mainGreen
            ? ColorAssets.subGreen
            : backgroundColor == ColorAssets.mainBlue
            ? ColorAssets.subBlue
            : ColorAssets.subRed
        }
      >
        {CustomBreakpoints.matchesPlusMdUp && (
          <FooterButton backgroundColor={backgroundColor} />
        )}
      </Box>
      <Box
        minHeight={'2vh'}
        bgcolor={
          backgroundColor == ColorAssets.mainGreen
            ? ColorAssets.subGreen
            : backgroundColor == ColorAssets.mainBlue
            ? ColorAssets.subBlue
            : ColorAssets.subRed
        }
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Typography
          color={ColorAssets.textWhite}
          pl={
            CustomBreakpoints.matchesPlusMdUp
              ? '80px'
              : CustomBreakpoints.matchesSmDown
              ? '30px'
              : '40px'
          }
          fontSize={CustomBreakpoints.matchesMdUp ? '18px' : '12px'}
        >
          © 2024 Kyohei Murata
        </Typography>

        <Typography
          color={ColorAssets.textWhite}
          fontSize={CustomBreakpoints.matchesMdUp ? '18px' : '12px'}
          pr={
            CustomBreakpoints.matchesPlusMdUp
              ? '80px'
              : CustomBreakpoints.matchesSmDown
              ? '30px'
              : '40px'
          }
        >
          出典:Freepik
        </Typography>
      </Box>
    </>
  );
};
