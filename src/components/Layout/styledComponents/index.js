import styled from 'styled-components';
import { calculateRem } from '../../../utils/helpers';

export const Main = styled.main`
  background-color: ${props => props.theme.palette.common.offWhite};
  min-height: 100vh;
  padding: ${calculateRem(30)};
  font-family: ${props => props.theme.typography.fontFamily};
  & * {
    font-family: inherit !important;
  }
`;