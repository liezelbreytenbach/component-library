import { Checkbox, TextField, FormControl } from '@material-ui/core';
import styled from 'styled-components';

export const StyledTextField = styled(TextField)`
  & {
    background-color: ${props => props.theme.palette.common.white};
    input {
      padding-top: ${props => props.theme.spacing.xSpacing};
      padding-bottom: ${props => props.theme.spacing.xSpacing};
      &::placeholder {
        color:  ${props => props.theme.palette.text.secondary};
        opacity: 1;
      }
    }
    fieldset {
      border-color: ${props => props.theme.palette.common.border};
    }
    .MuiInputAdornment-root {
      color: ${props => props.theme.palette.grey.main};
    }
    .MuiOutlinedInput-root:hover fieldset {
      border-color: ${props => props.theme.palette.primary.main};
    }
  }
`;

export const StyledSelectBox = styled(FormControl)`
  & {
    width: 100%;
    background-color: ${props => props.theme.palette.common.white};
    color:  ${props => props.theme.palette.text.secondary};
    fieldset {
      border-color: ${props => props.theme.palette.common.border};
    }
    .MuiSelect-root {
      padding-top: ${props => props.theme.spacing.xSpacing};
      padding-bottom: ${props => props.theme.spacing.xSpacing};
    }
    .MuiSelect-select:focus {
      background-color: transparent;
    }
    .MuiInputBase-root:hover fieldset,
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${props => props.theme.palette.primary.main};
    }
    .MuiFormLabel-root.Mui-focused {
      color: ${props => props.theme.palette.primary.main};
    }
    .MuiInputLabel-outlined {
      background-color: ${props => props.theme.palette.common.white};
      transform: translate(14px, 13px) scale(1);
    }
  }
`;

export const TightCheckbox = styled(Checkbox)`
  && {
    padding: 0;
    color: ${props => props.theme.palette.grey.main};
    &:hover {
      background-color: transparent;
    }
    &:hover,
    &.MuiIconButton-root.Mui-checked {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`;