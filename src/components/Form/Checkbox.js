import PropTypes from 'prop-types';
import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { TightCheckbox } from './styledComponents';

export default function Checkbox ({ isChecked, onChange, ariaLabel, tight }) {

  const changeHanlder = (event) => onChange(event.target.checked);
  
  const props = { checked: isChecked, onChange: changeHanlder };

  if (ariaLabel) props.inputProps = {'aria-label': ariaLabel}

  if (tight) return <TightCheckbox {...props} disableRipple={true} />;
  return <MuiCheckbox {...props} />;
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  tight: PropTypes.bool
};