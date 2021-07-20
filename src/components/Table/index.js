import { Fragment, useState, useEffect, useCallback } from "react";
import {
	Paper,
	TableContainer,
	Table as MuiTable,
	TableHead,
	TableBody,
	TableRow,
} from "@material-ui/core";

import Checkbox from "../Form/Checkbox";
import TableTop from "./TableTop";
import Pagination from "./Pagination";
import EmptyTable from "./EmptyTable";
import { Cell, HeadCell, BodyRow } from "./styledComponents";
import { getCellText, getCellAction } from "../../utils/helpers";

const rowsPerPageOptions = [5, 10, 25];
const bulkInitialState = { count: 0, type: "" };

let isLoaded = false;

export default function Table({ title, labels, rows, hasSearch, filterKeys }) {
	// console.log('Table Rendering');

	const [pageIndex, setPageIndex] = useState(0);
	const [pageRows, setPageRows] = useState(rowsPerPageOptions[0]);
	const [pageSlice, setPageSlice] = useState([0, rowsPerPageOptions[0]]);
	const [filterOptions, setFiltersOptions] = useState("");
	const [search, setSearch] = useState("");
	const [matchedRows, setMatchedRows] = useState(rows);
	let [checkedRows, setCheckedRows] = useState([]);
	const [isAllChecked, setIsAllChecked] = useState(false);
	const [checkboxView, setCheckboxView] = useState(false);
	const [bulkAction, setBulkAction] = useState(bulkInitialState);

	// Update Pagination
	const changePageHandler = useCallback((index) => setPageIndex(index), []);
	const changePageRowsHanlder = useCallback(
		(length) => setPageRows(length),
		[]
	);

	// Get New Page Slice
	useEffect(() => {
		const newSlice = [
			pageIndex * pageRows,
			pageIndex * pageRows + pageRows,
		];
		if (pageSlice[0] !== newSlice[0] || pageSlice[1] !== newSlice[1])
			setPageSlice(newSlice);
	}, [pageIndex, pageRows, pageSlice]);

	// Get Filter Boxes
	let filterBoxes;
	if (filterKeys && filterKeys.length > 0) {
		filterBoxes = filterKeys.map((filterKey) => {
			const colIndex = labels.findIndex((col) => col.id === filterKey);
			if (colIndex === -1) return undefined;
			return {
				index: colIndex,
				id: labels[colIndex].id,
				label: labels[colIndex].text,
				options: new Set(
					rows.map((row) => getCellText(row.cells[colIndex]))
				),
			};
		});
	}

	// Update Filters and Search Values
	const changeFiltersHandler = useCallback(
		(options) => setFiltersOptions(options),
		[]
	);
	const changeSearchHandler = useCallback((query) => setSearch(query), []);

	// Apply Filter and Search
	useEffect(() => {
		if (isLoaded) {
			const matches = rows.filter((row) => {
				let filterMatch = true;
				let searchMatch = true;
				if (filterOptions.length > 0) {
					let filterMatches = 0;
					filterOptions.forEach((filter) => {
						if (
							filter.option ===
							getCellText(row.cells[filter.colIndex])
						)
							filterMatches++;
					});
					filterMatch = filterOptions.length === filterMatches;
				}
				if (search !== "") {
					const rowText = row.cells
						.map((cell) => getCellText(cell))
						.join(" ")
						.toLocaleLowerCase();
					searchMatch = rowText.includes(search.toLocaleLowerCase());
				}
				return filterMatch && searchMatch;
			});
			setMatchedRows(matches);
			setPageIndex(0);
		}
	}, [rows, search, filterOptions]);

	// Get Checked Rows
	const checkAllHandler = (isChecked) => {
		let list = isChecked ? matchedRows.map((row) => row.id) : [];
		setIsAllChecked((prevState) => !prevState);
		setCheckedRows(list);
	};
	const checkSingleHandler = (rowId, isChecked) => {
		let newList = [...checkedRows];
		if (!isChecked) {
			newList = newList.filter((item) => item !== rowId);
			setIsAllChecked(false);
		} else if (!newList.includes(rowId)) {
			newList.push(rowId);
		}
		if (newList.length === matchedRows.length) setIsAllChecked(true);
		setCheckedRows(newList);
	};

	// Is Bulk Action is Available

	useEffect(() => {
		const getBulkActions = () => {
			let tableActions = matchedRows.map((row) => {
				let rowActions = [
					...new Set(row.cells.map((cell) => getCellAction(cell))),
				];
				return rowActions.join("").trim();
			});
			tableActions = [...new Set(tableActions)];
			const allowBulk =
				tableActions.length === 1 && tableActions[0] !== "";
			setCheckboxView(allowBulk);
			if (allowBulk) {
				setBulkAction({
					...bulkAction,
					type: tableActions.join(""),
				});
			} else {
				setBulkAction(bulkInitialState);
			}
		};
		if (isLoaded) {
			// console.log('Bulk Actions Show Effect');
			getBulkActions();
			// if (isAllChecked) setCheckedRows(matchedRows);
			// setIsAllChecked(false);
			// setCheckedRows([]);
		}
		// eslint-disable-next-line
	}, [matchedRows]);

	// Update Bulk Action Values
	useEffect(() => {
		if (isLoaded) {
			// console.log('Bulk Actions State Effect');
			setBulkAction({
				...bulkAction,
				count: checkedRows.length,
			});
		}
		// eslint-disable-next-line
	}, [checkedRows]);

	// Bulk Action Triggered
	const bulkActionHandler = useCallback(() => {
		console.log(checkedRows, bulkAction.type);
	}, [checkedRows, bulkAction.type]);

	const emptyTable = matchedRows.length === 0;

	useEffect(() => {
		isLoaded = true;
	}, []);

	return (
		<Fragment>
			<TableTop
				title={title}
				filterBoxes={filterBoxes}
				onFilter={changeFiltersHandler}
				hasSearch={hasSearch}
				onSearch={changeSearchHandler}
				bulkAction={bulkAction}
				onBulkAction={bulkActionHandler}
			/>

			{!emptyTable && (
				<Paper>
					<TableContainer>
						<MuiTable aria-label="select table">
							<TableHead>
								<TableRow>
									{checkboxView && (
										<HeadCell>
											<Checkbox
												isChecked={isAllChecked}
												onChange={checkAllHandler}
												tight
												ariaLabel="Select All"
											/>
										</HeadCell>
									)}
									{labels.map((label) => (
										<HeadCell key={label.id}>
											{label.text}
										</HeadCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{matchedRows.slice(...pageSlice).map((row) => (
									<BodyRow key={row.id}>
										{checkboxView && (
											<Cell>
												<Checkbox
													isChecked={
														checkedRows.includes(
															row.id
														) || false
													}
													onChange={checkSingleHandler.bind(
														null,
														row.id
													)}
													tight
													ariaLabel="Select Item"
												/>
											</Cell>
										)}
										{row.cells.map((cell, index) => {
											const className =
												typeof cell !== "string" &&
												cell.type.name.includes(
													"Button"
												)
													? "tight"
													: "";
											return (
												<Cell
													key={`${row.id}${index}`}
													className={className}
												>
													{cell}
												</Cell>
											);
										})}
									</BodyRow>
								))}
							</TableBody>
						</MuiTable>
					</TableContainer>
					<Pagination
						pageIndex={pageIndex}
						rowCount={matchedRows.length}
						rowsPerPage={pageRows}
						rowsPerPageOptions={rowsPerPageOptions}
						onPage={changePageHandler}
						onPageRows={changePageRowsHanlder}
					/>
				</Paper>
			)}

			{emptyTable && <EmptyTable />}
		</Fragment>
	);
}
