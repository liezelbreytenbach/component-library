import { useState } from 'react';
import { InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { TextField } from './styledComponents';

export default function Search({onChange}) {
  const [query, setQuery] = useState('');
  
  const searchHandler = event => {
    setQuery(event.target.value);
    onChange(event.target.value);
  }

  return (
    <TextField placeholder="Search" variant="outlined" value={query} onChange={searchHandler} InputProps={{
      startAdornment: (
        <InputAdornment position="start"><SearchIcon /></InputAdornment>
      ),
    }} />
  )
}
