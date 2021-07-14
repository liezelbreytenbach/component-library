import { VpnKey } from "@material-ui/icons";
import { StyledButton, PasswordSymbols } from './styledComponents';

export default function PasswordButton({password}) {
  const copyHandler = () => {
    console.log(password);
  }

  return (
    <StyledButton variant="outlined" onClick={copyHandler}>
      <PasswordSymbols>******</PasswordSymbols>
      <VpnKey />
    </StyledButton>
  )
}