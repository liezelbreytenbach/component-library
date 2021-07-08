import { Fragment } from 'react';
import styled from 'styled-components';
import { useTheme, Chip } from '@material-ui/core';
import Disclaimer from '../Disclaimer';

export const tagStates = {
  ready: {text: 'Ready', palette: 'success', message: ''},
  inProgress: {text: 'In-Progress', palette: 'info', message: ''},
  queued:  {text: 'Queued', palette: 'warning', message: ''},
  expired:  {text: 'Expired', palette: 'grey', message: 'Valid for 9 days'},
  error:  {text: 'Error', palette: 'error', message: ''},
};

const PillTagDisclaimer = styled(Disclaimer)`
  margin-left: 10px;
  display: inline-block;
`;

export default function PillTag({ type }) {
  const { palette } = useTheme();
  return (
    <Fragment>
      <Chip label={type.text} style={{backgroundColor: palette[type.palette].light, color: palette[type.palette].main}} />
      {type.message !== '' && <PillTagDisclaimer>{type.message}</PillTagDisclaimer>}
    </Fragment>
  );
};