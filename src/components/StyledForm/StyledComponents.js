import styled from 'styled-components';
import { Checkbox, TextField } from '@material-ui/core';

export const StyledTextField = styled(TextField)`
  & {
    input {
      padding-top: ${props => props.theme.spacing.xSpacing};
      padding-bottom: ${props => props.theme.spacing.xSpacing};
    }
    .MuiInputAdornment-root {
      color: ${props => props.theme.palette.grey.main};
    }
    .MuiOutlinedInput-root:hover fieldset {
      border-color: ${props => props.theme.palette.primary.main};
    }
  }
`;

// export const TightCheckBox = styled(Checkbox)`
//   && {
//     padding: 0;
//     color: ${props => props.theme.palette.grey.main};
//     &:hover {
//       background-color: transparent;
//     }
//     &:hover,
//     &.Mui-checked {
//       color: ${props => props.theme.palette.primary.main};
//     }
//   }
// `;

export const TightCheckBox = styled(Checkbox)`
  && {
    padding: 0;
    color: ${props => props.theme.palette.grey.main};
    &:hover {
      background-color: transparent;
    }
    &:hover,
    &.Mui-checked {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`;