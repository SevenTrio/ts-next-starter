import { DefaultTheme } from 'styled-components';
import colors from './colors';

export const theme: DefaultTheme = {
  palette: {
    primary: colors.green,
    background: colors.white,
    error: colors.red,
    lightGrey: colors.grey[4],
    extraLightGrey: colors.grey[5],
    grey: colors.grey[3],
    darkGrey: colors.grey[2],

    text: {
      main: colors.grey[1],
      inverted: colors.white,
      secondary: colors.grey[2],
      disabled: colors.grey[3],
    },
  },
};
