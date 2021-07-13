import { InputLabel, Select, MenuItem} from '@material-ui/core';
import { StyledSelectBox } from './StyledComponents';

export default function StyledSelect() {

  return (
    <StyledSelectBox variant="outlined">
        <InputLabel id="demo-simple-select-filled-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={10}
          // onChange={handleChange}
        >
          <MenuItem value=""><em>Filter By</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </StyledSelectBox>
  );
}