import { useState, useCallback, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow } from "@material-ui/core";

import StyledCheckBox from '../StyledForm/StyledCheckBox';
import Pagination from './Pagination';
import { StyledCell, StyledHeadCell, StyledBodyRow } from './StyledComponents';

export default function StyledTable ({ labels, rows, onCheck, checkTable }) {
  const [pageSlice, setPageSlice] = useState([0, rows.length]);
  const [checkAll, setCheckAll] = useState(false);
  let [checkedItems, setCheckedItems] = useState([]);

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

  useEffect(() => {
    onCheck(checkedItems);
  }, [onCheck, checkedItems])

  return (
    <Paper>
      <TableContainer>
        <Table aria-label="select table">
          <TableHead>
            <TableRow>
              {checkTable && <StyledHeadCell>
                <StyledCheckBox checked={checkAll} onChange={checkAllHandler} tight ariaLabel="Select All" />
              </StyledHeadCell>}
              {labels.map(label => (
                <StyledHeadCell key={label.id}>{label.text}</StyledHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(...pageSlice).map((row) => (
              <StyledBodyRow key={row.id}>
                {checkTable && <StyledCell>
                  <StyledCheckBox 
                    checked={checkedItems.includes(row.id) || false} 
                    onChange={checkSingleHandler.bind(null, row.id)} 
                    tight ariaLabel="Select Item" 
                  />
                </StyledCell>}
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