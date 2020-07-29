
/**
 * At this file we ovverid materil-ui theme variable for theming app.
 */
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

import { getDirection } from '../localize/localize';


export const theme = createMuiTheme({
  direction: getDirection(),
  palette: {
    text: {
      primary: "#00000",
      secondary: "#ffffff",
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: pink[500],
    },

  },
  typography: {
    fontFamily: [
      'IRANSans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body2:{
      fontWeight:300,
      fontSize:'0.950rem'
    }
  },
});