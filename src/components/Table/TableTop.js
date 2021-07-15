import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
// import { GetApp, Replay } from "@material-ui/icons";

import Title from '../Title';
import IconButton from '../IconButton';
import Search from '../Form/Search';
import Select from '../Form/Select';

import { StyledTableTop } from './styledComponents';

export default function TableTop({ title, hasSearch, onSearch, filterBoxes, onFilter, bulkAction, onBulkAction }) {
  const [appliedFilters, setAppliedFilters] = useState([]);

  const filterHandler = (colIndex, option) => {
    let filters = [...appliedFilters];
    if (option !== "") {
      const filterIndex = filters.findIndex(filter => filter.colIndex === colIndex);
      if (filterIndex === -1) {
        filters.push({colIndex, option});
      } else {
        filters[filterIndex].option = option;
      }
    } else {
      filters = filters.filter(filter => filter.colIndex !== colIndex);
    }
    setAppliedFilters(filters);
  };

  const searchHandler = (query) => onSearch(query);
  
  const bulkHandler = () => onBulkAction();
  
  useEffect(() => {
    onFilter(appliedFilters);
  }, [onFilter, appliedFilters]);
  
  const isBulkAction = bulkAction.count > 0;

  return (
    <StyledTableTop container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Title variant="h2">{title}</Title>
        </Grid>
        <Grid item sm={8}>
          <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
            {isBulkAction && <Grid item>
              <IconButton type={bulkAction.type} onClick={bulkHandler}></IconButton>
            </Grid>}
            {filterBoxes && filterBoxes.map((filter, index) => {
              return <Grid key={filter.id} item sm={3}>
                <Select id={`${filter.id}Filter`} label={`${filter.label}`} options={[...filter.options]} onChange={filterHandler.bind(null, filter.index)} />
              </Grid>
            })}
            {hasSearch && <Grid item sm={3}>
              <Search onChange={searchHandler} />
            </Grid>}
          </Grid>
        </Grid>
      </StyledTableTop>
  )
}