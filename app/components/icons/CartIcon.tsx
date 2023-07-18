import type {IconProps} from '../Icon';

const CartIcon = ({...props}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.34751 2.15374C1.40764 1.16847 2.2298 0.399994 3.22377 0.399994H16.7764C17.7704 0.399994 18.5925 1.16847 18.6527 2.15373L19.5966 17.6204C19.6621 18.6938 18.8032 19.6 17.7203 19.6H2.27985C1.19701 19.6 0.338092 18.6938 0.403599 17.6204L1.34751 2.15374ZM7.58334 5.73333C7.58334 5.2915 7.22267 4.93333 6.77775 4.93333C6.33284 4.93333 5.97217 5.2915 5.97217 5.73333C5.97217 7.94247 7.77553 9.73333 10.0001 9.73333C12.2246 9.73333 14.028 7.94247 14.028 5.73333C14.028 5.2915 13.6673 4.93333 13.2224 4.93333C12.7775 4.93333 12.4168 5.2915 12.4168 5.73333C12.4168 7.05881 11.3348 8.13333 10.0001 8.13333C8.66535 8.13333 7.58334 7.05881 7.58334 5.73333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CartIcon;
