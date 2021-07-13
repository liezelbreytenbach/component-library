import { calculateRem } from './helpers';

const fonts = {
  main: "'Open Sans', sans-serif",
  titles: "'Poppins', sans-serif"
}

export const theme = {
  palette: {
    common: {white: '#fff', offWhite: '#FAFBFC', border: '#181C251F'},
    text: {primary: '#181C25E6', secondary: '#181C25B3', headers: '#181C25'},
    primary: { main: '#12277D' },
    grey: { light: '#9A9DA726', main: '#9A9DA7', dark: '#181C25'},
    error: { light: '#E81C4627', main: '#E81C46' },
    success: { light: '#d4ece5', main: '#279D85' },
    warning: { light: '#FAC42D34', main: '#F8A528' },
    info: { light: '#dce1f1', main: '#506EDE' },
    action: { hover: '#12277D0D'},
    divider: '#00000014',
  },
  typography: {
    fontFamily: fonts.main,
    fontFamilyTitles: fonts.titles,
    h1: {fontSize: calculateRem(24), fontWeight: 500, gutterBottom: calculateRem(39)},
    h2: {fontSize: calculateRem(21), fontWeight: 400},
  },
  spacing: {
    xSpacing: calculateRem(12),
  }
}

export const tagStates = {
  inProgress: {text: 'In-Progress', palette: theme.palette.info, message: ''},
  queued:  {text: 'Queued', palette: theme.palette.warning, message: ''},
  ready: {text: 'Ready', palette: theme.palette.success, message: ''},
  error:  {text: 'Error', palette: theme.palette.error, message: ''},
  expired:  {text: 'Expired', palette: theme.palette.grey, message: 'Valid for 9 days'},
};