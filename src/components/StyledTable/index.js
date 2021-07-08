import { useState, useCallback } from 'react';
import { withStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

import CellComponent from './CellComponent';
import Pagination from './Pagination';

export default function StyledTable ({ labels, rows }) {

  const [pageSlice, setPageSlice] = useState([0, rows.length]);

  const pageHandler = useCallback((page, pageRows) => {
    setPageSlice([page * pageRows, page * pageRows + pageRows])
  }, []);

  const StyledTableCell = withStyles(() => ({
    head: {
      fontWeight: 'bold'
    },
  }))(TableCell);

  return (
    <Paper>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {labels.map(label => (
                <StyledTableCell key={label}>{label}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(...pageSlice).map((row) => (
              <TableRow key={row.id}>
                {row.cells.map((cell, index) => <CellComponent key={`${row.id}${index}`} cell={cell} />)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination rows={rows.length} onPage={pageHandler} />
    </Paper>
  );

}