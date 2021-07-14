import styled from 'styled-components';
import { Grid, TableRow, TableCell, TablePagination } from "@material-ui/core";
import { calculateRem } from '../../../utils/helpers';

export const StyledTableTop = styled(Grid)`
  padding-bottom: ${calculateRem(18)};
`;

export const StyledCell = styled(TableCell)`
  && {
    color: ${props => props.theme.palette.text.primary};
    border-bottom-color: ${props => props.theme.palette.divider};
    padding-top: ${props => props.theme.spacing.xSpacing};
    padding-bottom: ${props => props.theme.spacing.xSpacing};
    .MuiIconButton-root {
      color: ${props => props.theme.palette.grey.main};
      &:hover {
        color: ${props => props.theme.palette.primary.main};
        background-color: transparent;
      }
    }
    &.tight {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

export const StyledHeadCell = styled(StyledCell)`
  && {
    font-weight: bold;
  }
`;

export const StyledBodyRow = styled(TableRow)`
  &&:hover {
    background-color: ${props => props.theme.palette.action.hover};
  }
`;

export const StyledPagination = styled(TablePagination)`
  && {
    color: ${props => props.theme.palette.text.secondary};
    button:not([class*="-disabled"]) {
      color: ${props => props.theme.palette.primary.main};
    }
  }
`;

export const StyledEmptyTable = styled.p`
  && {
    text-align: center;
    padding: ${calculateRem(30)};
  }
`;