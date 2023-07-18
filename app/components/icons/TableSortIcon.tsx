import type {IconProps} from '../Icon';

const TableSortIcon = ({...props}: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 16L18 8H6L12 16Z" fill="#989898" />
    </svg>
  );
};

export default TableSortIcon;
