'use client';
import { theme } from '@/app/ui/font';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type Props = {
  imageSrc: string;
  imageAlt: string;
  size: 'small' | 'medium' | 'large';
  isNotAnimation?: boolean;
  direction?: 'left' | 'right';
  title: string;
  body?: string;
  bodyFontSize?: string;
  py: string;
  imageRef?: React.RefObject<HTMLDivElement>;
  typographyRef?: React.RefObject<HTMLDivElement>;
};

export const CustomizedTimeline = (props: Props): JSX.Element => {
  // const isImageVisible = props.imageRef
  //   ? //? useTimeLineObserver(props.imageRef)
  //     false
  //   : false;
  // const isTypographyVisible = props.typographyRef
  //   ? //? useTimeLineObserver(props.typographyRef)
  //     false
  //   : false;
  // const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesSm = false;
  return (
    <TimelineItem
      position={
        useMediaQuery(theme.breakpoints.up('md')) ? 'alternate' : 'right'
      }
    >
      <TimelineSeparator>
        {props.isNotAnimation ? (
          <Box
            sx={{
              width: 90, // 固定幅
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TimelineDot
              style={{
                borderColor:
                  props.size === 'medium' || props.size === 'large'
                    ? '#8C7269'
                    : undefined,
                borderWidth:
                  props.size === 'medium' || props.size === 'large'
                    ? '4px'
                    : undefined,
              }}
              variant="filled"
            >
              <Image
                layout="intrinsic"
                src={props.imageSrc}
                alt={props.imageAlt}
                width={matchesSm ? '90' : '120'}
                height={matchesSm ? '90' : '120'}
              />
            </TimelineDot>
          </Box>
        ) : (
          <Box
            sx={{
              width: 90, // 固定幅
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TimelineDot
              style={{
                borderColor:
                  props.size === 'medium' || props.size === 'large'
                    ? '#8C7269'
                    : undefined,
                borderWidth:
                  props.size === 'medium' || props.size === 'large'
                    ? '4px'
                    : undefined,
              }}
              variant="filled"
              ref={props.imageRef}
              sx={{
                // opacity: isImageVisible ? 1 : 0,
                opacity: 1,
                transition: 'opacity 0.5s linear',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                layout="intrinsic"
                width={
                  matchesSm
                    ? 80
                    : props.size == 'small'
                    ? 100
                    : props.size == 'medium'
                    ? 120
                    : 140
                }
                height={
                  matchesSm
                    ? 80
                    : props.size == 'small'
                    ? 100
                    : props.size == 'medium'
                    ? 120
                    : 140
                }
              />
            </TimelineDot>
          </Box>
        )}

        <TimelineConnector
          sx={{ height: '200px', backgroundColor: '#8C7269' }}
        />
      </TimelineSeparator>

      <TimelineContent
        sx={{
          py: props.py,
          px: 2,
          width: useMediaQuery(theme.breakpoints.up('md')) ? '600px' : '200px',
          maxWidth: '100%',
        }}
      >
        {props.isNotAnimation ? (
          <Box>
            <Typography fontSize={'20px'} fontWeight={'bold'}>
              {props.title}
            </Typography>
            {props.body && (
              <Typography fontSize={'16px'} pt={1}>
                {props.body}
              </Typography>
            )}
          </Box>
        ) : (
          <Box
            ref={props.typographyRef}
            sx={{
              // opacity: isTypographyVisible ? 1 : 0,
              // transform: isTypographyVisible
              //   ? 'translateX(0)'
              //   : props.direction === 'right'
              //   ? 'translateX(30%)'
              //   : 'translateX(-30%)',
              transition: 'opacity 0.5s linear, transform 0.5s ease-in-out',
            }}
          >
            <Typography fontSize={'20px'} fontWeight={'bold'}>
              {props.title}
            </Typography>
            {props.body && props.body.trim().length > 0 && (
              <Typography fontSize={props.bodyFontSize} pt={1}>
                {props.body}
              </Typography>
            )}
          </Box>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
