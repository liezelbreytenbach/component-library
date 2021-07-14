import styled from 'styled-components';
import { Snackbar as MuiSnackBar } from '@material-ui/core';

export const StyledSnackbar = styled(MuiSnackBar)`
  & {
    .MuiSnackbarContent-root {
      background-color: ${props => props.theme.palette.primary.main};
      font-family: ${props => props.theme.typography.fontFamilyTitles} !important;
      font-size: ${props => props.theme.typography.snackbar.fontSize};
      font-weight: ${props => props.theme.typography.snackbar.fontWeight};
      .MuiIconButton-root,
      .MuiIconButton-root:hover {
        color: inherit;
      }
    }
  }
`;