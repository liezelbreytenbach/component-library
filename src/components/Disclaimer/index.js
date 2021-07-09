import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { calculateRem } from '../../utils/helpers';

const StyledDisclaimer = styled.span`
  color: ${theme.palette.grey.main};
  font-style: italic;
  font-size: ${calculateRem(12)};
`;

export default function Disclaimer({className, children}) {
  return <StyledDisclaimer className={className}>{children}</StyledDisclaimer>;
}