import {createTheme} from '@mui/material/styles'
import 'typeface-inconsolata'

export const DchungTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#25308c',
    },
    secondary: {
      main: '#9c7f23',
    },
  },
  typography: {
    fontFamily: 'Inconsolata',
    h1: {
      fontFamily: 'Inconsolata',
      fontWeight: 400,
      fontSize: '5rem',
    },
    h2: {
      fontFamily: 'Inconsolata',
    },
  },
});