import styled from 'styled-components';
import { calculateRem } from '../../../utils/helpers';

export const Disclaimer = styled.span`
  color: ${props => props.theme.palette.grey.main};
  font-style: italic;
  font-size: ${calculateRem(12)};
  margin-left: 10px;
  display: inline-block;
`;