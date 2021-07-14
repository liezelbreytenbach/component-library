import { useState } from 'react';
import { InputLabel, Select as MuiSelect, MenuItem} from '@material-ui/core';
import { StyledSelectBox } from './styledComponents';

export default function Select({id, label, options, onChange}) {
  const [selected, setSelected] = useState('');

  const selectHandler = event => {
    setSelected(event.target.value);
    onChange(event.target.value);
  }

  return (
    <StyledSelectBox variant="outlined">
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <MuiSelect
          labelId={`${id}-label`}
          id={id}
          value={selected}
          onChange={selectHandler}
        >
          <MenuItem value=""><em>{label}</em></MenuItem>
          {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
        </MuiSelect>
      </StyledSelectBox>
  );
}