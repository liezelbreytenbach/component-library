import { Fragment } from 'react';
import { Chip } from '@material-ui/core';
import { Disclaimer } from './styledComponents';

export default function PillTag({ label, palette, message }) {
  return (
    <Fragment>
      <Chip label={label} style={{backgroundColor: palette.light, color: palette.main}} size="small" />
      {message !== '' && <Disclaimer>{message}</Disclaimer>}
    </Fragment>
  );
};