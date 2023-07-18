import type {IconProps} from '../Icon';

const FacebookIcon = ({...props}: IconProps) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M48.8889 24.5057C48.8889 10.9786 37.9378 0 24.4444 0C10.9511 0 0 10.9786 0 24.5057C0 36.3665 8.40889 46.2423 19.5556 48.5213V31.8574H14.6667V24.5057H19.5556V18.3793C19.5556 13.6497 23.3933 9.80228 28.1111 9.80228H34.2222V17.154H29.3333C27.9889 17.154 26.8889 18.2568 26.8889 19.6046V24.5057H34.2222V31.8574H26.8889V48.8889C39.2333 47.6636 48.8889 37.2242 48.8889 24.5057Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};

export default FacebookIcon;
