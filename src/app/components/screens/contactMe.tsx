import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Box, Stack, Typography } from '@mui/material';
import ContactForm from '../ui-kits/contactForm';

export const ContactMe = ({
  backgroundColor,
}: {
  backgroundColor: string;
}): JSX.Element => {
  const ColorAssets = useColorAssets();
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
          variant="h3"
          color={ColorAssets.textBlack}
          fontWeight={'Bold'}
        >
          Contact me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ lineHeight: '3.0' }}
          color={ColorAssets.textBlack}
          //maxWidth={'620px'}
          maxWidth={'100%'}
          id="contact-me"
          textAlign={'left'}
        >
          最後までご覧いただきありがとうございます。 <br />
          このサイトを通じて、 少しでも私のことを知っていただければ幸いです。
          もしあればコメントや質問等、なんでもお気軽にご連絡ください
        </Typography>
        <ContactForm backgroundColor={backgroundColor} />
      </Stack>
    </Box>
  );
};
