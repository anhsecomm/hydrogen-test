import {clsx} from 'clsx';

type TypographyPropsType = {
  variant?:
    | 'display-1'
    | 'display-2'
    | 'display-3'
    | 'display-4'
    | 'display-5'
    | 'display-6'
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'paragraph'
    | 'subtitle'
    | 'form-label'
    | 'form-input'
    | 'form-error';
  children: React.ReactNode;
  as?: React.ElementType;
  fontSize?: string; // EX: text-paragraph
  lineHeight?: string; // EX: leading-[1.25]
  fontWeight?:
    | 'font-thin'
    | 'font-extralight'
    | 'font-light'
    | 'font-normal'
    | 'font-medium'
    | 'font-semibold'
    | 'font-bold'
    | 'font-extrabold'
    | 'font-black';
  fontFamily?:
    | 'font-inter'
    | 'font-standard'
    | 'font-bradford'
    | 'font-display'
    | 'font-mono';
  fontStyle?: 'italic' | 'not-italic';
  color?: 'default' | 'primary' | 'secondary' | string; // Enum or Color Class: text-vinamilk-blue
  className?: string;
  isCustomAll?: boolean;
  [key: string]: any;
};

const Typography = ({
  variant = 'paragraph',
  children,
  as: Component,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  fontStyle = 'not-italic',
  color = 'primary',
  className,
  // isCustomAll,
  ...props
}: TypographyPropsType) => {
  const colors: Record<string, string> = {
    default: 'text-inherit',
    primary: 'text-vinamilk-blue',
    secondary: 'text-vinamilk-cream',
    error: 'text-system-red',
  };

  if (variant === 'form-error') {
    color = 'error';
  }

  if (!Component) {
    Component = MAPPING_HTML_TAGS[variant] || 'p';
  }

  const styles = clsx(
    'transition-all',
    `${fontFamily || MAPPING_FONT_FAMILIES[variant] || 'font-inter'}`, // font-family
    fontSize ? fontSize : MAPPING_FONT_SIZE[variant], // font-size, line-height
    {lineHeight, 'md-max:font-normal': variant === 'heading-3'}, // overlap line-height before // special for heading 3 in mobile view
    `${colors[color] || color}`, // text-color
    fontWeight ? fontWeight : MAPPING_FONT_WEIGHT[variant], // font-weight
    `${fontStyle || MAPPING_FONT_STYLE[variant] || 'not-italic'}`, // font-style
    className,
  );

  return (
    <Component className={styles} {...props}>
      {children}
    </Component>
  );
};

export default Typography;

// Constants
const MAPPING_FONT_SIZE: {[key: string]: string} = {
  'display-1': 'text-display-1',
  'display-2': 'text-display-2',
  'display-3': 'text-display-3',
  'display-4': 'text-display-4',
  'display-5': 'text-display-5',
  'display-6': 'text-display-6',
  'heading-1': 'text-heading-1',
  'heading-2': 'text-heading-2',
  'heading-3': 'text-heading-3',
  'heading-4': 'text-heading-4',
  'heading-5': 'text-heading-5',
  'heading-6': 'text-heading-6',
  paragraph: 'text-paragraph',
  subtitle: 'text-subtitle',
  'form-label': 'text-form-label',
  'form-input': 'text-form-input',
  'form-error': 'text-form-error',
};

const MAPPING_HTML_TAGS: {[key: string]: React.ElementType} = {
  'display-1': 'p',
  'display-2': 'p',
  'display-3': 'p',
  'display-4': 'p',
  'display-5': 'p',
  'display-6': 'p',
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'heading-6': 'h6',
  paragraph: 'p',
  subtitle: 'p',
  'form-label': 'span',
  'form-input': 'span',
  'form-error': 'span',
};

const MAPPING_FONT_FAMILIES: {[key: string]: string} = {
  'display-1': 'font-display',
  'display-2': 'font-display',
  'display-3': 'font-display',
  'display-4': 'font-standard',
  'display-5': 'font-standard',
  'display-6': 'font-standard',
  'heading-1': 'font-standard',
  'heading-2': 'font-standard',
  'heading-3': 'font-standard',
  'heading-4': 'font-standard',
  'heading-5': 'font-standard',
  'heading-6': 'font-standard',
  paragraph: 'font-inter',
  subtitle: 'font-bradford',
  'form-label': 'font-standard',
  'form-input': 'font-inter',
  'form-error': 'font-inter',
};

const MAPPING_FONT_WEIGHT: {[key: string]: string} = {
  'display-1': 'font-medium',
  'display-2': 'font-medium',
  'display-3': 'font-medium',
  'display-4': 'font-medium',
  'display-5': 'font-medium',
  'display-6': 'font-medium',
  'heading-1': 'font-medium',
  'heading-2': 'font-medium',
  'heading-3': 'font-medium',
  'heading-4': 'font-normal',
  'heading-5': 'font-normal',
  'heading-6': 'font-normal',
  paragraph: 'font-normal',
  subtitle: 'font-normal',
  'form-label': 'font-medium',
  'form-input': 'font-normal',
  'form-error': 'font-bold',
};

const MAPPING_FONT_STYLE: {[key: string]: string} = {
  'display-1': 'not-italic',
  'display-2': 'not-italic',
  'display-3': 'not-italic',
  'display-4': 'not-italic',
  'display-5': 'not-italic',
  'display-6': 'not-italic',
  'heading-1': 'not-italic',
  'heading-2': 'not-italic',
  'heading-3': 'not-italic',
  'heading-4': 'not-italic',
  'heading-5': 'not-italic',
  'heading-6': 'not-italic',
  paragraph: 'not-italic',
  subtitle: 'italic',
  'form-label': 'not-italic',
  'form-input': 'not-italic',
  'form-error': 'not-italic',
};
