'use client';
import { useTimeLineObserver } from '@/hooks/view/useTimeLineObserver';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRef } from 'react';

export const CustomizedTimeline = (): JSX.Element => {
  const timelineDot_1Ref = useRef<HTMLDivElement>(null);
  const timelineDot_2Ref = useRef<HTMLDivElement>(null);

  const typography_1Ref = useRef<HTMLDivElement>(null);
  const typography_2Ref = useRef<HTMLDivElement>(null);

  const isDotVisible_1 = useTimeLineObserver(timelineDot_1Ref);
  const isDotVisible_2 = useTimeLineObserver(timelineDot_2Ref);

  const isTypographyVisible_1 = useTimeLineObserver(typography_1Ref);

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            ref={timelineDot_1Ref}
            sx={{
              opacity: isDotVisible_1 ? 1 : 0,
              transition: 'opacity 1s linear',
            }}
          >
            <Image src="/babyCar.svg" alt="babyCar" width={160} height={160} />
          </TimelineDot>
          <TimelineConnector sx={{ height: '120px' }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            py: '48px',
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
        >
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography
            ref={typography_1Ref}
            sx={{
              opacity: isTypographyVisible_1 ? 1 : 0,
              transform: isTypographyVisible_1
                ? 'translateX(0%)'
                : 'translateX(50%)',
              transition: 'opacity 0.2s ease-in, transform 0.5s ease-in-out',
            }}
          >
            Because you need strength
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            ref={timelineDot_2Ref}
            sx={{
              opacity: isDotVisible_2 ? 1 : 0,
              transition: 'opacity 1s linear',
            }}
          >
            <Image src="/babyCar.svg" alt="babyCar" width={80} height={80} />
          </TimelineDot>
          <TimelineConnector sx={{ height: '120px' }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            py: '12px',
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
          }}
        >
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
