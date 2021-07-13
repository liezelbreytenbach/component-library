import { IconButton } from "@material-ui/core";
import { GetApp, Replay } from "@material-ui/icons";
import { tagStates } from "../utils/theme";
import PillTag from "../components/PillTag";

export const dummyLabels = [
	{
    id: "fileName",
		text: "File Name",
	},
	{
    id: "exportDate",
		text: "Export Date",
	},
	{
    id: "exportTime",
		text: "Export Time",
	},
	{
    id: "exportType",
		text: "Export Type",
	},
	{
    id: "status",
		text: "Status",
	},
	{
    id: "userName",
		text: "User Name",
	},
	{
    id: "password",
		text: "Password",
	},
	{
    id: "action",
		text: "",
	},
];

const DownloadButton = () => {
	return (
		<IconButton size="small">
			<GetApp />
		</IconButton>
	);
};
const ReloadButton = () => {
	return (
		<IconButton size="small">
			<Replay />
		</IconButton>
	);
};

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
			"",
			<DownloadButton />,
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
			"",
			"",
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
			"",
			"",
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
			"",
			<ReloadButton />,
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
			"",
			"",
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
			"",
			<ReloadButton />,
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
			"",
			<DownloadButton />,
		],
	},
];
