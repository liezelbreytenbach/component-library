import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { calculateRem } from '../../utils/helpers';

const StyledLayout = styled.main`
  background-color: ${theme.palette.common.offwhite};
  min-height: 100vh;
  padding: ${calculateRem(30)};
`;

export default function Layout ({ className, children }) {
  return <StyledLayout className={className}>{children}</StyledLayout>
}
