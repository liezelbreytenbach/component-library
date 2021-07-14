import { StyledTitle } from './styledComponents';

export default function Title({variant, component, gutterBottom, children}) {
  let props = {};
  
  if (component) props.component = component;
  if (gutterBottom) props.gutterBottom = true;

  return (
    <StyledTitle variant={variant || "h1"} {...props}>{children}</StyledTitle>
  );
};