import { tagStates } from '../utils/theme';
import PillTag from '../components/PillTag';

export const dummyLabels = ['File Name', 'Export Date', 'Export Time', 'Export Type', 'Status', 'User Name'];

export const dummyRows = [
	{
		id: "dfbsjk",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Form Responses",
      <PillTag type={tagStates.ready} />,
			"Jane Doe",
		],
	},
	{
		id: "dfbsak",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Form Images",
      <PillTag type={tagStates.inProgress} />,
			"Jane Doe",
		],
	},
	{
		id: "saksff",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Social Feed Images",
      <PillTag type={tagStates.queued} />,
			"Jane Doe",
		],
	},
	{
		id: "acseef",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Candidates",
      <PillTag type={tagStates.expired} />,
			"Jane Doe",
		],
	},
	{
		id: "kasdhl",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Members",
      <PillTag type={tagStates.error} />,
			"Jane Doe",
		],
	},
	{
		id: "sfgsdg",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Form Responses",
      <PillTag type={tagStates.expired} />,
			"Jane Doe",
		],
	},
	{
		id: "asknfa",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Form Images",
      <PillTag type={tagStates.ready} />,
			"Jane Doe",
		],
	},
];
