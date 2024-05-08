import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useColorAssets } from '../../../hooks/view/useColorAssets';
import { OverlayParts } from '../common/overlayParts';
import { PopUpMenuButtonBase } from '../common/popUpMenuButtonBase';

type Props = {};

export const PopUpMenuButton = ({
  backgroundColor,
}: {
  backgroundColor: string;
}): JSX.Element => {
  const [positionList, setPositionList] = useState([
    { left: 0, top: 0 },
    { left: 0, top: 0 },
    { left: 0, top: 0 },
  ]);
  const [isHover, setIsHover] = useState(false);
  const [overlay, setOverlay] = useState<boolean>(false);
  const hoverAddIcon = () => {
    setPositionList([
      { left: 0, top: -80 },
      { left: 0, top: -160 },
      { left: 0, top: -240 },
    ]);
    setIsHover(true);
    setOverlay(true);
  };

  const leaveAddIcon = () => {
    setPositionList([
      { left: 0, top: 0 },
      { left: 0, top: 0 },
      { left: 0, top: 0 },
    ]);
    setIsHover(false);
    setOverlay(false);
  };

  const ColorAssets = useColorAssets();

  return (
    <>
      <OverlayParts overlay={overlay} />
      <Box
        display={'flex'}
        position="fixed"
        bottom="8%"
        right="5%"
        zIndex={'2000'}
      >
        <Box
          width="70px"
          height="70px"
          bgcolor={'none'}
          onMouseLeave={leaveAddIcon}
        >
          <Box
            onClick={() => (!isHover ? hoverAddIcon() : leaveAddIcon())}
            top="0px"
            left="0px"
            position="relative"
          >
            <PopUpMenuButtonBase
              backgroundColor={backgroundColor}
              position="absolute"
              zIndex={1000}
              rotate={isHover ? 'rotateZ(45deg)' : ''}
              isHover={isHover}
            >
              <AddIcon
                style={{
                  color: ColorAssets.textWhite,
                  fontSize: '1.5rem',
                }}
              />
            </PopUpMenuButtonBase>
          </Box>
          <Box position="absolute" top="0px" left="0px">
            <PopUpMenuButtonBase
              backgroundColor={backgroundColor}
              position="absolute"
              left={positionList[0].left}
              top={positionList[0].top}
              onClick={() => {}}
            >
              <Typography fontSize={'12px'} color={ColorAssets.textWhite}>
                contact me
              </Typography>
            </PopUpMenuButtonBase>
          </Box>
          <Box position="absolute" top="0px" left="0px">
            <PopUpMenuButtonBase
              backgroundColor={backgroundColor}
              position="absolute"
              left={positionList[1].left}
              top={positionList[1].top}
            >
              <Typography fontSize={'12px'} color={ColorAssets.textWhite}>
                profile
              </Typography>
            </PopUpMenuButtonBase>
          </Box>
          <Box position="absolute" top="0px" left="0px">
            <PopUpMenuButtonBase
              backgroundColor={backgroundColor}
              position="absolute"
              left={positionList[2].left}
              top={positionList[2].top}
              onClick={() => {
                leaveAddIcon();
              }}
            >
              <Typography fontSize={'12px'} color={ColorAssets.textWhite}>
                About Me
              </Typography>
            </PopUpMenuButtonBase>
          </Box>
        </Box>
      </Box>
    </>
  );
};
