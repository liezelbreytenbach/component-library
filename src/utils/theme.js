import { createTheme } from '@material-ui/core';

export const themeWT = {
  palette: {
    common: {offwhite: '#FAFBFC', hover: '#12277D0D'},
    text: {primary: '#181C25E6', secondary: '#181C25B3', headers: '#181C25'},
    primary: { main: '#12277D' },
    grey: { light: '#9A9DA726', main: '#9A9DA7', dark: '#181C25'},
    error: { light: '#E81C4627', main: '#E81C46' },
    success: { light: '#d4ece5', main: '#279D85' },
    warning: { light: '#FAC42D34', main: '#F8A528' },
    info: { light: '#dce1f1', main: '#506EDE' },
    action: { hover: '#12277D0D'},
    divider: '#00000014',
  }
}

export const theme = createTheme(themeWT);