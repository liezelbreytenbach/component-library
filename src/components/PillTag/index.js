import { Fragment } from 'react';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';
import Disclaimer from '../Disclaimer';

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