import { withStyles, TableRow, TableCell } from "@material-ui/core";
import { calculateRem } from '../../utils/helpers';

export const StyledCell = withStyles((theme) => ({
  root: {
    borderBottomColor: theme.palette.divider,
    paddingTop: calculateRem(14),
    paddingBottom: calculateRem(14),
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