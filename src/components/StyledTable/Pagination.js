import React, { useEffect, useState } from 'react';
import { withStyles, TablePagination } from '@material-ui/core';

const Pagination = ({ rows, onPage }) => {
  const pageLength = [5, 10, 25]
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageLength[0]);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    onPage(page, rowsPerPage)
  }, [onPage, page, rowsPerPage]);

  const StyledPagination = withStyles((theme) => ({
    root: {
      color: theme.palette.text.secondary
    },
    actions: {
      color: theme.palette.primary.main
    }
  }))(TablePagination);

  return (
    <StyledPagination
        rowsPerPageOptions={pageLength}
        component="div"
        count={rows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
  );
};

export default Pagination;