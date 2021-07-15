import { Fragment } from "react";
import ReactDOM from 'react-dom';
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { StyledSnackbar } from './styledComponents';

export default function Snackbar ({ message, isOpen, onClose }) {
  return (
    ReactDOM.createPortal(
      <StyledSnackbar 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={2000}
        onClose={onClose}
        message={message}
        action={
          <Fragment>
            <IconButton size="small" aria-label="close" onClick={onClose}>
              <Close />
            </IconButton>
          </Fragment>
        } 
      />,
      document.getElementById('overlay-root')
    )
  )
}
