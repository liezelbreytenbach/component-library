import { withStyles, TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const StyledTextField = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '& .MuiOutlinedInput-input': {
      paddingTop: '12px',
      paddingBottom: '12px',
    },
    '& .MuiOutlinedInput-root:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  }
}))(TextField);

const StyledIcon = withStyles((theme) => ({
  root: {
    color: theme.palette.grey.main
  }
}))(InputAdornment);

export default function StyledSearch() {
  return (
    <StyledTextField placeholder="Search" variant="outlined" InputProps={{
      startAdornment: (
        <StyledIcon position="start"><Search /></StyledIcon>
      ),
    }} />
  )
}
