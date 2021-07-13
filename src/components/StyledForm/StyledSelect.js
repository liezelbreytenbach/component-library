import { useState } from 'react';
import { InputLabel, Select, MenuItem} from '@material-ui/core';
import { StyledSelectBox } from './StyledComponents';

export default function StyledSelect({id, label, options, onChange}) {
  const [selected, setSelected] = useState('');

  const selectHandler = event => {
    setSelected(event.target.value);
    onChange(event.target.value);
  }

  return (
    <StyledSelectBox variant="outlined">
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={selected}
          onChange={selectHandler}
        >
          <MenuItem value=""><em>{label}</em></MenuItem>
          {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
        </Select>
      </StyledSelectBox>
  );
}