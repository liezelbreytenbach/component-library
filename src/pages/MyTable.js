import Container from '@material-ui/core/Container';
import StyledTable from '../components/StyledTable';
import { dummyLabels, dummyRows } from '../dummyData/table-data';

export default function MyTable() {
	return (
    <Container>
        <StyledTable labels={dummyLabels} rows={dummyRows} />
    </Container>
	);
}
