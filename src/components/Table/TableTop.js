import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Title from '../Title';
import IconButton from '../IconButton';
import Search from '../Form/Search';
import Select from '../Form/Select';

import { StyledTableTop } from './styledComponents';

let isLoaded = false;

const TableTop = ({ title, filterBoxes, onFilter, hasSearch, onSearch, bulkAction, onBulkAction }) => {

  // console.log('TableTop Rendering');

  const [filters, setFilters] = useState([]);

  const changeFilterHandler = (colIndex, option) => {
    let newFilters = [...filters];
    if (option !== "") {
      const filterIndex = newFilters.findIndex(filter => filter.colIndex === colIndex);
      if (filterIndex === -1) {
        newFilters.push({colIndex, option});
      } else {
        newFilters[filterIndex].option = option;
      }
    } else {
      newFilters = newFilters.filter(filter => filter.colIndex !== colIndex);
    }
    setFilters(newFilters);
  };

  useEffect(() => {
    if (isLoaded) {
      onFilter(filters);
    } else {
      isLoaded = true;
    }
  }, [onFilter, filters]);

  const changeSearchHandler = (query) => onSearch(query);
  
  const bulkActionHandler = () => onBulkAction();

  return (
    <StyledTableTop container justifyContent="space-between" alignItems="center">
        
        <Grid item>
          <Title variant="h2">{title}</Title>
        </Grid>
        
        <Grid item sm={8}>
          <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
            
            {bulkAction.count > 0 && <Grid item>
              <IconButton type={bulkAction.type} onClick={bulkActionHandler}></IconButton>
            </Grid>}
            
            {filterBoxes && filterBoxes.map((filter) => {
              return <Grid key={filter.id} item sm={3}>
                <Select 
                  id={`${filter.id}Filter`} 
                  label={filter.label} 
                  options={[...filter.options]} 
                  onChange={changeFilterHandler.bind(null, filter.index)} 
                />
              </Grid>
            })}
            
            {hasSearch && <Grid item sm={3}>
              <Search onChange={changeSearchHandler} />
            </Grid>}
            
          </Grid>
        </Grid>
        
      </StyledTableTop>
  )
}

export default React.memo(TableTop);