import { Fragment, useState, useCallback, useEffect } from 'react';
import { Paper, TableContainer, Table as MuiTable, TableHead, TableBody, TableRow } from "@material-ui/core";

import Checkbox from '../Form/Checkbox';
import TableTop from './TableTop';
import Pagination from './Pagination';
import EmptyTable from './EmptyTable';
import { Cell, HeadCell, BodyRow } from './styledComponents';
import { getCellText } from '../../utils/helpers';

export default function Table ({ labels, rows, hasSearch, filters }) {
  const [pageSlice, setPageSlice] = useState([0, rows.length]);
  const [filterOptions, setFiltersOptions] = useState('');
  const [search, setSearch] = useState('');
  const [checkAll, setCheckAll] = useState(false);
  const [matchedRows, setMatchedRows] = useState(rows);
  let [checkedItems, setCheckedItems] = useState([]);

  let checkTable = false;

  let filterBoxes;
  if (filters && filters.length > 0) {
    filterBoxes = filters.map(filter => {
      const colIndex = labels.findIndex(col => col.id === filter);
      if (colIndex === -1) return undefined;

      return {
        index: colIndex,
        id: labels[colIndex].id,
        label: labels[colIndex].text,
        options: new Set(rows.map(row => getCellText(row.cells[colIndex]))),
      }
    })
  }

  const pageHandler = useCallback((page, pageRows) => {
    setPageSlice([page * pageRows, page * pageRows + pageRows])
  }, []);

  const checkAllHandler = (checked) => {
    let list = [];
    if (checked) list = rows.map(row => row.id);
    setCheckAll((prevState) => !prevState);
    setCheckedItems(list);
  };

  const checkSingleHandler = (id, checked) => {
    let newList = [...checkedItems];
    if (checked) {
      if (!newList.includes(id)) newList.push(id);
    } else {
      newList = newList.filter(item => item !== id);
      setCheckAll(false);
    }
    setCheckedItems(newList);
  };

  const filterHandler = (options) => setFiltersOptions(options);
  const searchHandler = (query) => setSearch(query);

  useEffect(() => {
    const matches = rows.filter(row => {
      let filterMatch = true;
      let searchMatch = true;
      if (filterOptions.length > 0) {
        let filterMatches = 0;
        filterOptions.forEach(filter => {
          if (filter.option === getCellText(row.cells[filter.id])) filterMatches++;
        })
        filterMatch = filterOptions.length === filterMatches;
      }
      if (search !== '') {
        const rowText = row.cells.map(cell => getCellText(cell));
        searchMatch = rowText.join(' ').toLocaleLowerCase().includes(search.toLocaleLowerCase());
      }
      return filterMatch && searchMatch;
    })
    setMatchedRows(matches);
  }, [labels, rows, search, filterOptions])

  const emptyTable = matchedRows.length === 0;

  return (
    <Fragment>
      
      <TableTop title="Export History" hasSearch={hasSearch} onSearch={searchHandler} filterBoxes={filterBoxes} onFilter={filterHandler} />
      
      {!emptyTable && 
        <Paper>
          <TableContainer>
            <MuiTable aria-label="select table">
              <TableHead>
                <TableRow>
                  {checkTable && <HeadCell>
                    <Checkbox checked={checkAll} onChange={checkAllHandler} tight ariaLabel="Select All" />
                  </HeadCell>}
                  {labels.map(label => (
                    <HeadCell key={label.id}>{label.text}</HeadCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {matchedRows.slice(...pageSlice).map((row) => (
                  <BodyRow key={row.id}>
                    {checkTable && <Cell>
                      <Checkbox 
                        checked={checkedItems.includes(row.id) || false} 
                        onChange={checkSingleHandler.bind(null, row.id)} 
                        tight ariaLabel="Select Item" 
                      />
                    </Cell>}
                    {row.cells.map((cell, index) => {
                      let className = '';
                      if (typeof cell !== 'string' && (cell.type.name.includes('Button') )) {
                        className = 'tight';
                      }
                      return <Cell key={`${row.id}${index}`} className={className}>{cell}</Cell>
                    })}
                  </BodyRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
          <Pagination rows={rows.length} onPage={pageHandler} />
        </Paper>
      }

      {emptyTable && <Paper><EmptyTable /></Paper>}


    </Fragment>
  );

}