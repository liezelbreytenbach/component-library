import styled from 'styled-components';
import { Paper, Grid, TableRow, TableCell, TablePagination } from "@material-ui/core";
import { calculateRem } from '../../../utils/helpers';

export const StyledTableTop = styled(Grid)`
  padding-bottom: ${calculateRem(18)};
`;

export const Cell = styled(TableCell)`
  && {
    color: ${props => props.theme.palette.text.primary};
    border-bottom-color: ${props => props.theme.palette.divider};
    padding-top: ${props => props.theme.spacing.xSpacing};
    padding-bottom: ${props => props.theme.spacing.xSpacing};
    .MuiIconButton-root {
      color: ${props => props.theme.palette.grey.main};
    }
    &.tight {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

export const HeadCell = styled(Cell)`
  && {
    font-weight: bold;
  }
`;

export const BodyRow = styled(TableRow)`
  &&:hover {
    background-color: ${props => props.theme.palette.action.hover};
  }
`;

export const PaginationContainer = styled(TablePagination)`
  && {
    color: ${props => props.theme.palette.text.secondary};
    button:not([class*="-disabled"]) {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`;

export const EmptyTableContainer = styled(Paper)`
  && {
    text-align: center;
    padding: ${calculateRem(30)};
  }
`;