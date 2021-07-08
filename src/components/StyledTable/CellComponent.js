import { TableCell } from "@material-ui/core";
import PillTag from '../PillTag';

export const tableComponentTypes = {
  pillTag: 'Pill Tag'
};

export default function CellComponent ({ cell }) {
  const getComponent = () => {
    if (cell.component && cell.component === tableComponentTypes.pillTag) {
      return <PillTag type={cell.content} />;
    }
    return cell;
  }

  return <TableCell>{getComponent(cell)}</TableCell>
};