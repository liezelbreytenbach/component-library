import { IconButton } from "@material-ui/core";
import styled from 'styled-components';

export const StyledButton = styled(IconButton)`
  &&.MuiIconButton-root:hover {
    color: ${props => props.theme.palette.primary.main};
    background-color: transparent;
  }
`;