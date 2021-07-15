import { PaginationContainer } from './styledComponents';

const Pagination = ({ count, page, pageOptions, rowsPerPage, onPage, onPageLength }) => {

  const handleChangePage = (event, newPage) => onPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    onPageLength(parseInt(event.target.value, 10));
    onPage(0);
  };

  return (
    <PaginationContainer
        rowsPerPageOptions={pageOptions}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
  );
};

export default Pagination;