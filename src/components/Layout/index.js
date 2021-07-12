import { StyledLayout } from './StyledComponents';

export default function Layout ({ className, children }) {
  return <StyledLayout className={className}>{children}</StyledLayout>
}
