export const calculateRem = (size) => `${(size / 16) * 1}rem`;

export const getCellText = (cell) => {
  if (typeof cell === 'string') return cell;
  if('type' in cell && cell.type.name === 'PillTag') {
    return cell.props.label;
  }
  return '';
}

export const getCellAction = (cell) => {
  if(typeof cell !== 'string' && 'type' in cell && cell.type.name === 'IconButton') {
    return cell.props.type;
  }
  return '';
}