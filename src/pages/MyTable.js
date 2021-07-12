import { useState } from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography } from '@material-ui/core';
import StyledTable from '../components/StyledTable';
import StyledSearch from '../components/StyledForm/StyledSearch';
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
      <HeaderGrid container justifyContent="space-between" alignItems="flex-end">
        <Grid item>
          <Typography variant="h1" gutterBottom>A Select Table</Typography>
          <Typography variant="h2">{selectedMsg}</Typography>
        </Grid>
        <Grid item>
          <StyledSearch />
        </Grid>
      </HeaderGrid>
      <StyledTable labels={dummyLabels} rows={dummyRows} onSelect={selectHandler} />
    </Container>
	);
}
