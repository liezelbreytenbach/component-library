import { useState, useCallback, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow } from "@material-ui/core";

import StyledCheckBox from '../StyledForm/StyledCheckBox';
import Pagination from './Pagination';
import { StyledCell, StyledHeadCell, StyledBodyRow } from './StyledComponents';

export default function StyledTable ({ labels, rows, onSelect }) {
  const [pageSlice, setPageSlice] = useState([0, rows.length]);
  const [selectAll, setSelectedAll] = useState(false);
  let [selectedItems, setSelectedItems] = useState([]);

  const pageHandler = useCallback((page, pageRows) => {
    setPageSlice([page * pageRows, page * pageRows + pageRows])
  }, []);

  const checkAllHandler = (checked) => {
    let list = [];
    if (checked) list = rows.map(row => row.id);
    setSelectedAll((prevState) => !prevState);
    setSelectedItems(list);
  };

  const checkSingleHandler = (id, checked) => {
    let newList = [...selectedItems];
    if (checked) {
      if (!newList.includes(id)) newList.push(id);
    } else {
      newList = newList.filter(item => item !== id);
    }
    setSelectedItems(newList);
  };

  useEffect(() => {
    onSelect(selectedItems);
  }, [onSelect, selectedItems])
  
  return (
    <Paper>
      <TableContainer>
        <Table aria-label="select table">
          <TableHead>
            <TableRow>
              <StyledHeadCell>
                <StyledCheckBox checked={selectAll} onChange={checkAllHandler} tight ariaLabel="Select All" />
              </StyledHeadCell>
              {labels.map(label => (
                <StyledHeadCell key={label}>{label}</StyledHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(...pageSlice).map((row) => (
              <StyledBodyRow key={row.id}>
                <StyledCell>
                  <StyledCheckBox 
                    checked={selectedItems.includes(row.id) || false} 
                    onChange={checkSingleHandler.bind(null, row.id)} 
                    tight ariaLabel="Select Item" 
                  />
                </StyledCell>
                {row.cells.map((cell, index) => <StyledCell key={`${row.id}${index}`}>{cell}</StyledCell>)}
              </StyledBodyRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination rows={rows.length} onPage={pageHandler} />
    </Paper>
  );

}