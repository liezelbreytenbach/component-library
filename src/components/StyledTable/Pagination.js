import React, { useEffect, useState } from 'react';
import { StyledPagination } from './StyledComponents';

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