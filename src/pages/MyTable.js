import { Container } from '@material-ui/core';

import Title from '../components/Title';
import Table from '../components/Table';

import { dummyLabels, dummyRows } from '../dummyData/table-data';

export default function MyTable() {

	return (
    <Container>
      <Title gutterBottom>Bulk Exports</Title>
      <Table labels={dummyLabels} rows={dummyRows} hasSearch filters={["exportType", "status"]} />
    </Container>
	);
}
