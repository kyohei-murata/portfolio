import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useCustomBreakpoints } from '@/hooks/view/useCustomBreakpoints';
import { Box, Stack, Typography } from '@mui/material';
import ContactForm from '../ui-kits/contactForm';

export const ContactMe = ({
  backgroundColor,
}: {
  backgroundColor: string;
}): JSX.Element => {
  const ColorAssets = useColorAssets();
  const CustomBreakpoints = useCustomBreakpoints();
  return (
    <Box
      minHeight={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      bgcolor={'#f8f8f8'}
    >
      <Stack
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={4}
      >
        <Typography
          variant={
            CustomBreakpoints.matchesMdUp
              ? 'h3'
              : CustomBreakpoints.matchesSmDown
              ? 'h5'
              : 'h4'
          }
          color={ColorAssets.textBlack}
          fontWeight={'Bold'}
        >
          Contact me
        </Typography>
        <Box display="flex" justifyContent="center">
          <Typography
            fontSize={
              CustomBreakpoints.matchesMdUp
                ? '14px'
                : CustomBreakpoints.matchesSmDown
                ? '10px'
                : '12px'
            }
            style={{ lineHeight: '3.0' }}
            color={ColorAssets.textBlack}
            maxWidth={'60%'}
            id="contact-me"
            textAlign={'left'}
          >
            最後までご覧いただきありがとうございます。 <br />
            このサイトを通じて、 少しでも私のことを知っていただければ幸いです。
            もしあればコメントや質問等、なんでもお気軽にご連絡ください
          </Typography>
        </Box>

        <ContactForm backgroundColor={backgroundColor} />
      </Stack>
    </Box>
  );
};
