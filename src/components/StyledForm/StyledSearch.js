import { useState } from 'react';
import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { StyledTextField } from './StyledComponents';

export default function StyledSearch({onChange}) {
  const [query, setQuery] = useState('');
  
  const searchHandler = event => {
    setQuery(event.target.value);
    onChange(event.target.value);
  }

  return (
    <StyledTextField placeholder="Search" variant="outlined" value={query} onChange={searchHandler} InputProps={{
      startAdornment: (
        <InputAdornment position="start"><Search /></InputAdornment>
      ),
    }} />
  )
}
