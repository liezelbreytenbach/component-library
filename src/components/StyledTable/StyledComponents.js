import { withStyles, TableRow, TableCell, TablePagination } from "@material-ui/core";
import { calculateRem } from '../../utils/helpers';

export const StyledCell = withStyles((theme) => ({
  root: {
    borderBottomColor: theme.palette.divider,
    paddingTop: calculateRem(12),
    paddingBottom: calculateRem(12),
  }
}))(TableCell);

export const StyledHeadCell = withStyles(() => ({
  root: {
    fontWeight: 'bold'
  },
}))(StyledCell);

export const StyledBodyRow = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    }
  }
}))(TableRow);

export const StyledPagination = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary
  },
  actions: {
    color: theme.palette.primary.main
  }
}))(TablePagination);