import { withStyles, Checkbox } from '@material-ui/core';

const TightCheckBox = withStyles((theme) => ({
  root: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    }
  }
}))(Checkbox);

export default function StyledCheckBox ({ checked, onChange, ariaLabel, tight }) {

  const changeHanlder = (event) => {
    onChange(event.target.checked);
  }

  const props = {
    color: 'primary',
    checked,
    onChange: changeHanlder
  }
  if (ariaLabel) {
    props.inputProps = {'aria-label': ariaLabel}
  }

  if (tight) return <TightCheckBox {...props} disableRipple={true} />;
  return <Checkbox {...props} />;
}