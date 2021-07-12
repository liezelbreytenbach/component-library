import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { StyledTextField } from './StyledComponents';

export default function StyledSearch() {
  return (
    <StyledTextField placeholder="Search" variant="outlined" InputProps={{
      startAdornment: (
        <InputAdornment position="start"><Search /></InputAdornment>
      ),
    }} />
  )
}
