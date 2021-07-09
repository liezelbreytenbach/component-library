import { IconButton } from "@material-ui/core";
import Icon from '../Icon';

export const buttonTypes = {
  icon: 'Icon',
};

export default function Button({ type, content }) {
  if (type === buttonTypes.icon) {
    return <IconButton><Icon name={content.name} /></IconButton>
  }
  return '';
}