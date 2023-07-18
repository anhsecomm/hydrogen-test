import type {IconProps} from '../Icon';

export default function LogoutIcon({stroke, ...props}: IconProps) {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.2222 12.7777L21 8.99989M21 8.99989L17.2222 5.22211M21 8.99989L7.77778 8.99989M13.4444 12.7777V13.7221C13.4444 15.2869 12.1759 16.5554 10.6111 16.5554H6.83333C5.26853 16.5554 4 15.2869 4 13.7221V4.27767C4 2.71286 5.26853 1.44434 6.83333 1.44434H10.6111C12.1759 1.44434 13.4444 2.71286 13.4444 4.27767V5.22211"
        stroke={stroke || '#171717'}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
