import { GetApp } from '@material-ui/icons';

export const iconSet = {
  download: {name: 'Get App' }
}

export default function Icon({ name }) {
  if (name === iconSet.download) return <GetApp />;
  return '';
}