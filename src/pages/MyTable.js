import { useState, useEffect } from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import styled from 'styled-components';

import Title from '../components/Title';
import StyledTable from '../components/StyledTable';
import StyledSearch from '../components/StyledForm/StyledSearch';
import StyledSelect from '../components/StyledForm/StyledSelect';

import { calculateRem } from '../utils/helpers';
import { dummyLabels, dummyRows } from '../dummyData/table-data';

const HeaderGrid = styled(Grid)`
  padding-bottom: ${calculateRem(18)};
`;

const filters = new Set(dummyRows.map(row => row.cells[4].props.type.text));

export default function MyTable() {
  const initialCheckMsg = 'No items selected...';
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState(dummyRows);
  const [checkMsg, setCheckMsg] = useState(initialCheckMsg);

  const isBulkAction = filter === "Ready";
  
  const checkHandler = (list) => {
    let message = initialCheckMsg;
    if (list.length > 0) {
      message = `Checked rows:${list.map(item => ` ${item}`)}`;
    }
    setCheckMsg(message);
  }

  useEffect(() => {
    const matchedRows = dummyRows.filter(row => {
      let filterMatch = true;
      let searchMatch = true;
      if (filter !== '') {
        filterMatch = row.cells[4].props.type.text === filter;
      }
      if (search !== '') {
        const rowText = row.cells.map(cell => {
          if (typeof cell === "string") {
            return cell;
          } else if ('type' in cell.props && 'text' in cell.props.type) {
            return cell.props.type.text;
          };
          return '';
        });
        searchMatch = rowText.join(' ').toLocaleLowerCase().includes(search.toLocaleLowerCase());
      }
      return filterMatch && searchMatch;
    })
    console.log(matchedRows);
    setRows(matchedRows);
  }, [filter, search]);
  
  const selectHandler = (option) => setFilter(option);

  const searchHandler = (query) => setSearch(query);

  const hasRows = rows.length > 0;

	return (
    <Container>
      
      <Title gutterBottom>A Select Table</Title>
      
      <HeaderGrid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Title variant="h2">{checkMsg}</Title>
        </Grid>
        <Grid item sm={6}>
          <Grid container justifyContent="flex-end" spacing={2}>
            {isBulkAction && <Grid item>
              <IconButton><GetApp /></IconButton>
            </Grid>}
            <Grid item sm={4}>
              <StyledSelect id="statusFilterSelect" label="Filter By" options={[...filters]} onChange={selectHandler} />
            </Grid>
            <Grid item sm={4}>
              <StyledSearch onChange={searchHandler} />
            </Grid>
          </Grid>
        </Grid>
      </HeaderGrid>

      {hasRows && <StyledTable labels={dummyLabels} rows={rows} onCheck={checkHandler} checkTable={isBulkAction} />}
      {!hasRows && <p>No matching rows.</p>}

    </Container>
	);
}
