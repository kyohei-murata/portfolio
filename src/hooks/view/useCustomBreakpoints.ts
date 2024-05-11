import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export function useCustomBreakpoints() {
  const theme = useTheme();
  const matchesXsUp = useMediaQuery(theme.breakpoints.up('xs'));
  const matchesSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesMinusMdUp = useMediaQuery(theme.breakpoints.up('minusMd'));
  const matchesMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const matchesPlusMdUp = useMediaQuery(theme.breakpoints.up('plusMd'));
  const matchesLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesXlUp = useMediaQuery(theme.breakpoints.up('xl'));

  const matchesXsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMinusMdDown = useMediaQuery(theme.breakpoints.down('minusMd'));
  const matchesMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const matchesPlusMdDown = useMediaQuery(theme.breakpoints.down('plusMd'));
  const matchesLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesXlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return {
    //すべての変数を返す
    matchesXsUp,
    matchesSmUp,
    matchesMinusMdUp,
    matchesMdUp,
    matchesPlusMdUp,
    matchesXlUp,
    matchesXsDown,
    matchesSmDown,
    matchesMinusMdDown,
    matchesMdDown,
    matchesPlusMdDown,
    matchesXlDown,
  };
}
