import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box } from '@mui/material';
import Image from 'next/image';
import { RgbButton } from '../common/rgbButton';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

type HandleClick = (color: string) => void;

export const Controller = ({
  handleClick,
}: {
  handleClick: HandleClick;
}): JSX.Element => {
  const ColorAssets = useColorAssets();
  return (
    <Box py={4} position={'relative'} width={260} height={200}>
      <Image
        src={'/controller.svg'}
        alt="controller"
        width={260}
        height={200}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '65px',
          left: '170px',
        }}
      >
        <RgbButton
          buttonColor="red"
          onClick={() => {
            handleClick(ColorAssets.mainRed);
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '65px',
          left: '170px',
        }}
      >
        <RgbButton
          buttonColor="red"
          isAnimation
          onClick={() => {
            handleClick(ColorAssets.mainRed);
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '96px',
          left: '195px',
        }}
      >
        <RgbButton
          buttonColor="green"
          onClick={() => {
            handleClick(ColorAssets.mainGreen);
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '96px',
          left: '195px',
        }}
      >
        <RgbButton
          buttonColor="green"
          isAnimation
          onClick={() => {
            handleClick(ColorAssets.mainGreen);
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '102px',
          left: '156px',
        }}
      >
        <RgbButton
          buttonColor="blue"
          onClick={() => {
            handleClick(ColorAssets.buttonBlue);
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '102px',
          left: '156px',
        }}
      >
        <RgbButton
          buttonColor="blue"
          isAnimation
          onClick={() => {
            handleClick(ColorAssets.mainBlue);
          }}
        />
      </Box>
    </Box>
  );
};
