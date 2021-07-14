import { useState, useEffect } from 'react';
// import { Grid, IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
// import { GetApp, Replay } from "@material-ui/icons";

import Title from '../Title';
import Search from '../Form/Search';
import Select from '../Form/Select';

import { StyledTableTop } from './styledComponents';

export default function TableTop({ title, hasSearch, onSearch, filterBoxes, onFilter }) {
  const [appliedFilters, setAppliedFilters] = useState([]);

  const filterHandler = (id, option) => {
    let filters = [...appliedFilters];
    if (option !== "") {
      const filterIndex = filters.findIndex(filter => filter.id === id);
      if (filterIndex === -1) {
        filters.push({id, option});
      } else {
        filters[filterIndex].option = option;
      }
    } else {
      filters = filters.filter(filter => filter.id !== id);
    }
    setAppliedFilters(filters);
  };

  const searchHandler = (query) => onSearch(query);

  useEffect(() => {
    onFilter(appliedFilters);
  }, [onFilter, appliedFilters]);
  
  return (
    <StyledTableTop container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Title variant="h2">{title}</Title>
        </Grid>
        <Grid item sm={6}>
          <Grid container justifyContent="flex-end" spacing={2}>
            {filterBoxes && filterBoxes.map(filter => {
              return <Grid key={filter.id} item sm={4}>
                <Select id={`${filter.id}Filter`} label={`${filter.label}`} options={[...filter.options]} onChange={filterHandler.bind(null, filter.index)} />
              </Grid>
            })}
            {hasSearch && <Grid item sm={4}>
              <Search onChange={searchHandler} />
            </Grid>}
          </Grid>
        </Grid>
      </StyledTableTop>
  )
}