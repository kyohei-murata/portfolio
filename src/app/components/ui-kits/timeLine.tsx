'use client';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export const CustomizedTimeline = (): JSX.Element => {
  return (
    //長細い線を生成するBox

    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
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

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
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
