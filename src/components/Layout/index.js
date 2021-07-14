import { StyledLayout } from './styledComponents';

export default function Layout ({ className, children }) {
  return <StyledLayout className={className}>{children}</StyledLayout>
}
