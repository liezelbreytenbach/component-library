import { Main } from './styledComponents';

export default function Layout ({ className, children }) {
  return <Main className={className}>{children}</Main>
}
