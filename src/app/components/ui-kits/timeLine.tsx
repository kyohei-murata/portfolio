'use client';
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
  bodyFontSize?: string;
  py: string;
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
  return (
    <TimelineItem position="alternate">
      <TimelineSeparator>
        {props.isNotAnimation ? (
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
              src={props.imageSrc}
              alt={props.imageAlt}
              width={120}
              height={120}
            />
          </TimelineDot>
        ) : (
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
            }}
          >
            <Image
              src={props.imageSrc}
              alt={props.imageAlt}
              width={
                props.size == 'small' ? 100 : props.size == 'medium' ? 120 : 140
              }
              height={
                props.size == 'small' ? 100 : props.size == 'medium' ? 120 : 140
              }
            />
          </TimelineDot>
        )}

        <TimelineConnector
          sx={{ height: '200px', backgroundColor: '#8C7269' }}
        />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          py: props.py,
          px: 2,
          width: '600px',
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
              opacity: isTypographyVisible ? 1 : 0,
              transform: isTypographyVisible
                ? 'translateX(0)'
                : props.direction === 'right'
                ? 'translateX(30%)'
                : 'translateX(-30%)',
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
