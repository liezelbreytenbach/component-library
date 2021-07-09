import { Fragment } from 'react';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';
import Disclaimer from '../Disclaimer';
import { theme } from '../../utils/theme';

const palette = theme.palette;

export const tagStates = {
  inProgress: {text: 'In-Progress', palette: palette.info, message: ''},
  queued:  {text: 'Queued', palette: palette.warning, message: ''},
  ready: {text: 'Ready', palette: palette.success, message: ''},
  error:  {text: 'Error', palette: palette.warning, message: ''},
  expired:  {text: 'Expired', palette: palette.grey, message: 'Valid for 9 days'},
};

const PillTagDisclaimer = styled(Disclaimer)`
  margin-left: 10px;
  display: inline-block;
`;

export default function PillTag({ type }) {
  return (
    <Fragment>
      <Chip label={type.text} style={{backgroundColor: type.palette.light, color: type.palette.main}} size="small" />
      {type.message !== '' && <PillTagDisclaimer>{type.message}</PillTagDisclaimer>}
    </Fragment>
  );
};