import Container from '@material-ui/core/Container';

import { tagStates } from '../components/PillTag';
import { tableComponentTypes } from '../components/StyledTable/CellComponent';
import StyledTable from '../components/StyledTable';

const labels = ['File Name', 'Export Date', 'Export Time', 'Export Type', 'Status', 'User Name'];
const rows = [
	{id: "dfbsjk", cells: ["Name of File", "2021-06-01", "10:42", "Form Responses", {component: tableComponentTypes.pillTag, content: tagStates.ready}, "Jane Doe"]},
	{id: "dfbsak", cells: ["Name of File", "2021-06-01", "10:42", "Form Images", {component: tableComponentTypes.pillTag, content: tagStates.inProgress}, "Jane Doe"]},
	{id: "saksff", cells: ["Name of File", "2021-06-01", "10:42", "Social Feed Images", {component: tableComponentTypes.pillTag, content: tagStates.queued}, "Jane Doe"]},
	{id: "acseef", cells: ["Name of File", "2021-06-01", "10:42", "Candidates", {component: tableComponentTypes.pillTag, content: tagStates.expired}, "Jane Doe"]},
	{id: "kasdhl", cells: ["Name of File", "2021-06-01", "10:42", "Members", {component: tableComponentTypes.pillTag, content: tagStates.error}, "Jane Doe"]},
	{id: "sfgsdg", cells: ["Name of File", "2021-06-01", "10:42", "Form Responses", {component: tableComponentTypes.pillTag, content: tagStates.expired}, "Jane Doe"]},
	{id: "asknfa", cells: ["Name of File", "2021-06-01", "10:42", "Form Images", {component: tableComponentTypes.pillTag, content: tagStates.ready}, "Jane Doe"]},
];

export default function MyTable() {
	return (
    <Container>
        <StyledTable labels={labels} rows={rows} />
    </Container>
	);
}
