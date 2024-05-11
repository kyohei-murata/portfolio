'use client';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { useTimeLineObserver } from '@/hooks/view/useTimeLineObserver';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box } from '@mui/material';
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
  imageRef?: React.RefObject<HTMLDivElement>;
  typographyRef?: React.RefObject<HTMLDivElement>;
};

export const CustomizedTimeline = (props: Props): JSX.Element => {
  const isImageVisible = props.imageRef
    ? useTimeLineObserver(props.imageRef)
    : false;

  const isTypographyVisible = props.typographyRef
    ? useTimeLineObserver(props.typographyRef)
    : false;
  const CustomBreakpoints = useCustomBreakpoints();

  return (
    <TimelineItem
      position={CustomBreakpoints.matchesPlusMdUp ? 'alternate' : 'right'}
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
                layout="responsive"
                src={props.imageSrc}
                alt={props.imageAlt}
                width={CustomBreakpoints.matchesSmDown ? '90' : '120'}
                height={CustomBreakpoints.matchesSmDown ? '90' : '120'}
              />
            </TimelineDot>
          </Box>
        ) : (
          <Box
            sx={{
              //width: 90,
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
                opacity: isImageVisible ? 1 : 0,
                transition: 'opacity 0.5s linear',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                // layout="intrinsic"
                width={
                  CustomBreakpoints.matchesMdDown
                    ? 80
                    : props.size == 'small'
                    ? 100
                    : props.size == 'medium'
                    ? 120
                    : 140
                }
                height={
                  CustomBreakpoints.matchesMdDown
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
          px: 2,
          maxWidth: CustomBreakpoints.matchesPlusMdUp ? '60%' : '40%',
        }}
      >
        {props.isNotAnimation ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              flexDirection: 'column',
            }}
          >
            <Typography
              fontSize={CustomBreakpoints.matchesMinusMdDown ? '14px' : '20px'}
              fontWeight={'bold'}
              sx={{
                minHeight: '100px',
                width: '100%',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              {props.title}
            </Typography>
          </Box>
        ) : (
          <Box
            ref={props.typographyRef}
            pt={
              props.body && props.body.trim().length > 0
                ? 5
                : CustomBreakpoints.matchesPlusMdUp
                ? 5
                : 0
            }
            sx={{
              height: '100%',
              maxWidth:
                props.direction == 'right' && CustomBreakpoints.matchesPlusMdUp
                  ? '80%'
                  : undefined,
              opacity: isTypographyVisible ? 1 : 0,
              transform: isTypographyVisible
                ? 'translateX(0)'
                : props.direction === 'right'
                ? 'translateX(30%)'
                : 'translateX(-30%)',
              transition: 'opacity 0.5s linear, transform 0.5s ease-in-out',
              display: 'flex',
              alignItems: props.direction == 'left' ? 'flex-end' : undefined,
              flexDirection: 'column',
            }}
          >
            <Typography
              fontSize={CustomBreakpoints.matchesMinusMdDown ? '14px' : '20px'}
              fontWeight={'bold'}
              display={CustomBreakpoints.matchesMdDown ? 'flex' : undefined}
              alignItems={'center'}
              textAlign={
                CustomBreakpoints.matchesMdDown
                  ? 'left'
                  : props.direction === 'right'
                  ? 'left'
                  : 'right'
              }
              sx={{
                width: '100%',
                minHeight:
                  props.body && props.body.trim().length > 0 ? '' : '100px',
              }}
            >
              {props.title}
            </Typography>

            <Typography
              fontSize={CustomBreakpoints.matchesSmDown ? '12px' : '14px'}
              pt={1}
              maxWidth={CustomBreakpoints.matchesSmDown ? undefined : '60%'}
            >
              {props.body}
            </Typography>
          </Box>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
