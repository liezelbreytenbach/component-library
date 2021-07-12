import { Checkbox } from '@material-ui/core';
import { TightCheckBox } from './StyledComponents';

export default function StyledCheckBox ({ checked, onChange, ariaLabel, tight }) {

  const changeHanlder = (event) => onChange(event.target.checked);
  
  const props = { checked, onChange: changeHanlder };

  if (ariaLabel) props.inputProps = {'aria-label': ariaLabel}

  if (tight) return <TightCheckBox {...props} disableRipple={true} />;
  return <Checkbox {...props} />;
}