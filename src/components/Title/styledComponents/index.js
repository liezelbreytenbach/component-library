import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

export const StyledTitle = styled(Typography)`
  && {
    font-family: ${props => props.theme.typography.fontFamilyTitles} !important;
    font-size: ${props => props.theme.typography[props.variant].fontSize};
    font-weight: ${props => props.theme.typography[props.variant].fontWeight};
    color: ${props => props.theme.palette.grey.dark};
    ${props => props.gutterBottom && css`
      margin-bottom: ${props.theme.typography[props.variant].gutterBottom}
    `}
  }
`;