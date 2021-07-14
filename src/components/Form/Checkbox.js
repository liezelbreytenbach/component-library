import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { TightCheckbox } from './styledComponents';

export default function Checkbox ({ checked, onChange, ariaLabel, tight }) {

  const changeHanlder = (event) => onChange(event.target.checked);
  
  const props = { checked, onChange: changeHanlder };

  if (ariaLabel) props.inputProps = {'aria-label': ariaLabel}

  if (tight) return <TightCheckbox {...props} disableRipple={true} />;
  return <MuiCheckbox {...props} />;
}