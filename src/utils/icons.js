
import { GetApp, Replay } from "@material-ui/icons"

export const iconLibrary = {
  download: 'download',
  relaod: 'relaod',
}

export const getIcon = (icon) => {
  if (icon === 'download') {
    return <GetApp />;
  }
  if (icon === 'relaod') {
    return <Replay />;
  }
  return;
}