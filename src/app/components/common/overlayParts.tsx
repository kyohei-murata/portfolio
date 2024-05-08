import { Box } from '@mui/material';

type Props = {
  overlay: boolean;
  isDarker?: boolean;
};

export const OverlayParts = (props: Props): JSX.Element => {
  return (
    <Box
      display={props.overlay ? 'block' : 'none'}
      zIndex={'1000'}
      position="fixed"
      minWidth="100%"
      minHeight="100vh"
      left={'0'}
      top={'0'}
      bgcolor={'rgba(0, 0, 0, 0.5)'}
    />
  );
};
