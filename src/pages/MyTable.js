import { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

import Title from '../components/Title';
import StyledTable from '../components/StyledTable';
import StyledSearch from '../components/StyledForm/StyledSearch';
import StyledSelect from '../components/StyledForm/StyledSelect';

import { calculateRem } from '../utils/helpers';
import { dummyLabels, dummyRows } from '../dummyData/table-data';

const HeaderGrid = styled(Grid)`
  padding-bottom: ${calculateRem(18)};
`;

export default function MyTable() {
  const initialSelectMsg = 'No items selected...';
  const [selectedMsg, setSelectedMsg] = useState(initialSelectMsg);
  
  const selectHandler = (list) => {
    let message = initialSelectMsg;
    if (list.length > 0) {
      message = `Selected rows:${list.map(item => ` ${item}`)}`;
    }
    setSelectedMsg(message);
  }

	return (
    <Container>
      <Title gutterBottom>A Select Table</Title>
      <HeaderGrid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Title variant="h2">{selectedMsg}</Title>
        </Grid>
        <Grid item sm="6">
          <Grid container justifyContent="flex-end">
            <Grid item>
              Download
            </Grid>
            <Grid item sm="4">
              <StyledSelect />
            </Grid>
            <Grid item sm="4">
              <StyledSearch />
            </Grid>
          </Grid>
        </Grid>
      </HeaderGrid>
      <StyledTable labels={dummyLabels} rows={dummyRows} onSelect={selectHandler} />
    </Container>
	);
}
