import { FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

export default function StyledSelect() {

  return (
    <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={10}
          // onChange={handleChange}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  );
}