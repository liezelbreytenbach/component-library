import styled from 'styled-components';
import { TableRow, TableCell, TablePagination } from "@material-ui/core";

export const StyledCell = styled(TableCell)`
  && {
    color: ${props => props.theme.palette.text.primary};
    border-bottom-color: ${props => props.theme.palette.divider};
    padding-top: ${props => props.theme.spacing.xSpacing};
    padding-bottom: ${props => props.theme.spacing.xSpacing};
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