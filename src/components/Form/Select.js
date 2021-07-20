import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputLabel, Select as MuiSelect, MenuItem} from '@material-ui/core';
import { SelectField } from './styledComponents';

export default function Select({id, label, options, onChange}) {
  const [selected, setSelected] = useState('');

  const selectHandler = event => {
    setSelected(event.target.value);
    onChange(event.target.value);
  }

  return (
    <SelectField variant="outlined">
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
      </SelectField>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
