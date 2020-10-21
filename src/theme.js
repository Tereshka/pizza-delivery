import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      contrastText: '#ffffff',
    },
    secondary: {main: amber.A400},
  },
});

export default theme;