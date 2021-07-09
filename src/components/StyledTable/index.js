import { useState, useCallback } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow } from "@material-ui/core";

import Pagination from './Pagination';
import { StyledCell, StyledHeadCell, StyledBodyRow } from './StyledComponents';

export default function StyledTable ({ labels, rows }) {

  const [pageSlice, setPageSlice] = useState([0, rows.length]);

  const pageHandler = useCallback((page, pageRows) => {
    setPageSlice([page * pageRows, page * pageRows + pageRows])
  }, []);
  
  return (
    <Paper>
      <TableContainer>
        <Table aria-label="select table">
          <TableHead>
            <TableRow>
              {labels.map(label => (
                <StyledHeadCell key={label}>{label}</StyledHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(...pageSlice).map((row) => (
              <StyledBodyRow key={row.id}>
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