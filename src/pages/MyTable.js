import { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import StyledTable from '../components/StyledTable';
import { dummyLabels, dummyRows } from '../dummyData/table-data';

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
        <Typography variant="h1" gutterBottom>Some Table</Typography>
        <Typography variant="h2" gutterBottom>{selectedMsg}</Typography>
        <StyledTable labels={dummyLabels} rows={dummyRows} onSelect={selectHandler} />
    </Container>
	);
}
