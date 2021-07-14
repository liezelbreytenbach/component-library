import { Fragment } from "react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { StyledSnackbar } from './styledComponents';

export default function Snackbar ({ message, isOpen, onClose }) {
  
  const closeHandler = () => onClose();

  return  <StyledSnackbar 
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    open={isOpen}
    autoHideDuration={2000}
    onClose={closeHandler}
    message={message}
    action={
      <Fragment>
        <IconButton size="small" aria-label="close" onClick={closeHandler}>
          <Close />
        </IconButton>
      </Fragment>
    } 
  />
}
