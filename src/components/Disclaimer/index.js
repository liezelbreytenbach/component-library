import styled from 'styled-components';

const StyledDisclaimer = styled.span`
  color: #9A9DA7;
  font-style: italic;
  font-size: 12px;
`;

export default function Disclaimer({className, children}) {
  return <StyledDisclaimer className={className}>{children}</StyledDisclaimer>;
}