import { Fragment, useState } from "react";
import { Tooltip } from "@material-ui/core";
import { VpnKey } from "@material-ui/icons";
import { Button, PasswordSymbols } from './styledComponents';
import Snackbar from '../Snackbar';

export default function PasswordButton({ password }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  const copyHandler = () => {
    navigator.clipboard.writeText(password);
    setSnackbarOpen(true);
  }

  const closeSnackbarHandler = () => setSnackbarOpen(false);

  return (
    <Fragment>
      <Button variant="outlined" onClick={copyHandler}>
          <PasswordSymbols>******</PasswordSymbols>
          <Tooltip title="Copy Password to Clipboard" placement="top" arrow>
            <VpnKey />
        </Tooltip>
      </Button>
      <Snackbar message="Password Copied to Clipboard!" isOpen={snackbarOpen} onClose={closeSnackbarHandler} />
    </Fragment>
  )
}