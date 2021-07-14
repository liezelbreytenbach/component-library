import { Fragment } from 'react';
import { Chip } from '@material-ui/core';
import { PillTagDisclaimer } from './styledComponents';

export default function PillTag({ type }) {
  return (
    <Fragment>
      <Chip label={type.text} style={{backgroundColor: type.palette.light, color: type.palette.main}} size="small" />
      {type.message !== '' && <PillTagDisclaimer>{type.message}</PillTagDisclaimer>}
    </Fragment>
  );
};