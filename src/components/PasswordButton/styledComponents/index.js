import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { calculateRem } from '../../../utils/helpers';

export const Button = styled(MuiButton)`
  && {
    color: ${props => props.theme.palette.grey.main};
    border-color: ${props => props.theme.palette.grey.lightS};
    padding: ${calculateRem(5)} ${calculateRem(10)};
    &:hover {
      background-color: ${props => props.theme.palette.grey.lightS};
    }
  }
`;

export const PasswordSymbols = styled.span`
  line-height: 1;
  padding-top: ${calculateRem(5)};
  padding-right: ${calculateRem(16)};
`;



