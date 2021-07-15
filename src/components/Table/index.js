import { Fragment, useState, useEffect } from 'react';
import { Paper, TableContainer, Table as MuiTable, TableHead, TableBody, TableRow } from "@material-ui/core";

import Checkbox from '../Form/Checkbox';
import TableTop from './TableTop';
import Pagination from './Pagination';
import EmptyTable from './EmptyTable';
import { Cell, HeadCell, BodyRow } from './styledComponents';
import { getCellText } from '../../utils/helpers';

export default function Table ({ title, labels, rows, hasSearch, filterKeys }) {
  const pageOptions = [5, 10, 25];
  const bulkInitialState = { count: 0, type: "" };

  const [page, setPage] = useState(0);
  const [pageRows, setPageRows] = useState(pageOptions[0]);
  const [pageSlice, setPageSlice] = useState([0, pageOptions[0]]);
  const [filterOptions, setFiltersOptions] = useState('');
  const [search, setSearch] = useState('');
  const [checkAll, setCheckAll] = useState(false);
  const [matchedRows, setMatchedRows] = useState(rows);
  const [checkboxView, setCheckboxView] = useState(false);
  const [bulkAction, setBulkAction] = useState(bulkInitialState)
  let [checkedItems, setCheckedItems] = useState([]);

  let filterBoxes;
  if (filterKeys && filterKeys.length > 0) {
    filterBoxes = filterKeys.map(filter => {
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

  const pageHandler = (page) => setPage(page);
  const pageLengthHandler = (length) => setPageRows(length);

  useEffect(() => {
    const newSlice = [page * pageRows, page * pageRows + pageRows];
    if (pageSlice[0] !== newSlice[0] || pageSlice[1] !== newSlice[1]) setPageSlice(newSlice);
  }, [page, pageRows, pageSlice]);

  const checkAllHandler = (checked) => {
    let list = [];
    if (checked) list = matchedRows.map(row => row.id);
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
          if (filter.option === getCellText(row.cells[filter.colIndex])) filterMatches++;
        })
        filterMatch = filterOptions.length === filterMatches;
      }
      if (search !== '') {
        const rowText = row.cells.map(cell => getCellText(cell)).join(' ').toLocaleLowerCase();
        searchMatch = rowText.includes(search.toLocaleLowerCase());
      }
      return filterMatch && searchMatch;
    })
    setMatchedRows(matches);
    setPage(0);
    // setCheckAll(false);
    // setCheckedItems([]);
    
  }, [labels, rows, search, filterOptions]);

  const getCellAction = (cell) => {
    if(typeof cell !== 'string' && 'type' in cell && cell.type.name === 'IconButton') {
      return cell.props.type;
    }
    return '';
  }

  const bulkActionHandler = () => {
    console.log(checkedItems);
  }

  const getBulkActions = () => {
    let tableActions =  matchedRows.map(row => {
      let rowActions = [...new Set(row.cells.map(cell => getCellAction(cell)))];
      return rowActions.join('').trim();
    })
    tableActions = [...new Set(tableActions)];
    const allowBulk = tableActions.length === 1 && tableActions[0] !== "";  
    setCheckboxView(allowBulk);
    if (allowBulk) {
      setBulkAction({
        ...bulkAction,
        type: tableActions.join('')
      })
    } else {
      setBulkAction(bulkInitialState);
    }
  }
  
  useEffect(() => {
    getBulkActions()
  }, [matchedRows]);

  useEffect(() => {
    setBulkAction({
      ...bulkAction,
      count: checkedItems.length
    })
  }, [checkedItems])

  const emptyTable = matchedRows.length === 0;

  return (
    <Fragment>
      
      <TableTop title={title} hasSearch={hasSearch} onSearch={searchHandler} filterBoxes={filterBoxes} onFilter={filterHandler} bulkAction={bulkAction} onBulkAction={bulkActionHandler} />
      
      {!emptyTable && 
        <Paper>
          <TableContainer>
            <MuiTable aria-label="select table">
              <TableHead>
                <TableRow>
                  {checkboxView && <HeadCell>
                    <Checkbox checked={checkAll} onChange={checkAllHandler} tight ariaLabel="Select All" />
                  </HeadCell>}
                  {labels.map(label => <HeadCell key={label.id}>{label.text}</HeadCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                {matchedRows.slice(...pageSlice).map((row) => (
                  <BodyRow key={row.id}>
                    {checkboxView && <Cell>
                      <Checkbox 
                        checked={checkedItems.includes(row.id) || false} 
                        onChange={checkSingleHandler.bind(null, row.id)} 
                        tight ariaLabel="Select Item" 
                      />
                    </Cell>}
                    {row.cells.map((cell, index) => {
                      const className = typeof cell !== 'string' && cell.type.name.includes('Button') ? 'tight' : '';
                      return <Cell key={`${row.id}${index}`} className={className}>{cell}</Cell>
                    })}
                  </BodyRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
          <Pagination count={matchedRows.length} page={page} rowsPerPage={pageRows} pageOptions={pageOptions} onPage={pageHandler} onPageLength={pageLengthHandler} />
        </Paper>
      }

      {emptyTable && <EmptyTable />}

    </Fragment>
  );

}