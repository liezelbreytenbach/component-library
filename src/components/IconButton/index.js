import { StyledButton } from "./styledComponents";
import { getIcon } from '../../utils/icons';

export default function IconButton({type, onClick}) {
  const icon = getIcon(type);
  return <StyledButton size="small" onClick={onClick}>{icon}</StyledButton>
}
