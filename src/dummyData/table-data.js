import { tagStates } from "../utils/theme";
import { iconLibrary } from "../utils/icons";
import PillTag from "../components/PillTag";
import PasswordButton from '../components/PasswordButton';
import IconButton from "../components/IconButton";

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

export const dummyRows = [
	{
		id: "dfbsjk",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Form Responses",
			<PillTag {...tagStates.ready} />,
			"Jane Doe",
			<PasswordButton password="654321" />,
			<IconButton type={iconLibrary.download} />,
		],
	},
	{
		id: "dfbsak",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Form Images",
			<PillTag {...tagStates.inProgress} />,
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
			<PillTag {...tagStates.queued} />,
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
			<PillTag {...tagStates.expired} />,
			"Jane Doe",
			"",
      <IconButton type={iconLibrary.relaod} />,
		],
	},
	{
		id: "kasdhl",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Members",
			<PillTag {...tagStates.error} />,
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
			<PillTag {...tagStates.expired} />,
			"Jane Doe",
			"",
			<IconButton type={iconLibrary.relaod} />,
		],
	},
	{
		id: "asknfa",
		cells: [
			"Name of File",
			"2021-06-01",
			"10:42",
			"Form Images",
			<PillTag {...tagStates.ready} />,
			"Jane Doe",
			<PasswordButton password="543210" />,
			<IconButton type={iconLibrary.download} />,
		],
	},
];
