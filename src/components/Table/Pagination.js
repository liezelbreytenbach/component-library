import React from 'react';
import { PaginationContainer } from './styledComponents';

const Pagination = ({ rowCount, pageIndex, rowsPerPageOptions, rowsPerPage, onPage, onPageRows }) => {

  console.log('Pagination Rendering');
  
  const pageChangeHandler = (event, newPage) => onPage(newPage);

  const pageRowsChangeHanlder = (event) => {
    onPageRows(parseInt(event.target.value, 10));
    onPage(0);
  };

  return (
    <PaginationContainer
        page={pageIndex}
        count={rowCount}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={pageChangeHandler}
        onRowsPerPageChange={pageRowsChangeHanlder}
        component="div"
      />
  );
};

export default React.memo(Pagination);