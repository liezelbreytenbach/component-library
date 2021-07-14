export const calculateRem = (size) => `${(size / 16) * 1}rem`;

export const getCellText = (cell) => {
  if (typeof cell === 'string') return cell;
  if('type' in cell && cell.type.name === 'PillTag') {
    return cell.props.label;
  }
  return '';
}