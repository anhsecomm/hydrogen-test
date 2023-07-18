import type {IconProps} from '../Icon';

const SearchIcon = ({...props}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9051 3.9324C7.05421 3.9324 3.93247 7.05414 3.93247 10.905C3.93247 14.7559 7.05421 17.8776 10.9051 17.8776C12.8308 17.8776 14.5726 17.0982 15.8354 15.8354C17.0983 14.5725 17.8777 12.8307 17.8777 10.905C17.8777 7.05414 14.7559 3.9324 10.9051 3.9324ZM2.00006 10.905C2.00006 5.98691 5.98696 2 10.9051 2C15.8232 2 19.8101 5.98691 19.8101 10.905C19.8101 13.0156 19.0749 14.9558 17.8481 16.4816L21.7171 20.3506C22.0944 20.7279 22.0944 21.3397 21.7171 21.717C21.3397 22.0943 20.728 22.0943 20.3507 21.717L16.4816 17.848C14.9559 19.0748 13.0156 19.81 10.9051 19.81C5.98696 19.81 2.00006 15.8231 2.00006 10.905Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SearchIcon;
