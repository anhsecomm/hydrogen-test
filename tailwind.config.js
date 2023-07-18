import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          sm: '16px',
          md: '16px',
          lg: '32px',
          xl: '32px',
        },
        screens: {
          sm: {max: '100vw'},
          md: {max: '1023px'},
          lg: {max: '1279px'},
          xl: {max: '1343px'},
          '2xl': {max: '1600px'},
          'md-only': {min: '100vw', max: '1023px'},
          'lg-only': {min: '100vw', max: '1279px'},
          'xl-only': {min: '100vw', max: '1343px'},
          '2xl-only': {min: '1344px', max: '1600px'},
          'md-max': {max: '1023px'},
          'lg-max': {max: '1279px'},
        },
      },
      screens: {
        sm: {max: '100vw'},
        md: {max: '1023px'},
        lg: {max: '1279px'},
        xl: {max: '1343px'},
        '2xl': {max: '1600px'},
        'md-only': {min: '100vw', max: '1023px'},
        'lg-only': {min: '100vw', max: '1279px'},
        'xl-only': {min: '100vw', max: '1343px'},
        '2xl-only': {min: '1344px', max: '1600px'},
        'xs-min': {min: '400px'}, // for response small list item
        'xs-max': {max: '649px'},
        'sm-min': {min: '600px'}, // for response small list item
        'sm-max': {max: '767px'},
        'md-min': {min: '820px'}, // for response small list item
        'md-max': {max: '1023px'},
        'lg-min': {min: '1024px'},
        'lg-max': {max: '1279px'},
        'xl-min': {min: '1280px'},
        'xl-max': {max: '1343px'},
        '2xl-min': {min: '1344px'},
        '2xl-max': {max: '1600px'},
      },
      colors: {
        // New color
        'vinamilk-blue': 'var(--vinamilk-blue)',
        'vinamilk-cream': 'var(--vinamilk-cream)',
        'deep-blue': 'var(--deep-blue)',
        'factory-blue': 'var(--factory-blue)',
        'azure-blue': 'var(--azure-blue)',
        'baby-blue': 'var(--baby-blue)',
        'full-cream': 'var(--full-cream)',
        'butter-cream': 'var(--butter-cream)',
        'nut-cream': 'var(--nut-cream)',
        black: 'var(--black)',
        white: 'var(--white)',
        'black-800': 'var(--black-800)',
        'black-600': 'var(--black-600)',
        'black-400': 'var(--black-400)',
        'black-200': 'var(--black-200)',
        'gray-50': 'var(--gray-50)',
        'system-green': 'var(--system-green)',
        'system-red': 'var(--system-red)',
        'alternate-color-1': 'var(--alternate-color-1)',
        'alternate-color-2': 'var(--alternate-color-2)',
        'alternate-color-3': 'var(--alternate-color-3)',
        'alternate-color-4': 'var(--alternate-color-4)',
        'alternate-color-5': 'var(--alternate-color-5)',
        'alternate-color-6': 'var(--alternate-color-6)',
        'background-table': 'var(--background-table)',
        'border-table': 'var(--border-table)',

        // Old color - Check if used anywhere in the project before removing
        'product-details': 'var(--product-details)',
        'main-bg': 'var(--bg-color)',
        'primary-color': 'var(--primary-color)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        'new-cream': 'var(--new-cream)',
        'color-default': 'var(--color-default)',
        'black-500': 'var(--color-black-500)',
        'white-gray-50': 'var(--white-gray-50)',
        'vnm-cream': 'var(--vnm-cream)',
        'black-bold': 'var(--black-bold)',
        'light-blue': 'var(--light-blue)',
        'black-semi': 'var(--black-semi)',
      },
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
        'container-sm': '16px',
        'container-md': '16px',
        'container-lg': '32px',
        'container-xl': '32px',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"IBMPlexSerif"', 'Palatino', 'ui-serif'],
        inter: ['Inter', 'sans-serif'],
        standard: ['"VNM Standard"', 'sans-serif'],
        bradford: ['"VNM Bradford"', 'sans-serif'],
        display: ['"VNM Display"', 'sans-serif'],
        mono: ['"VNM Mono"', 'sans-serif'],
      },
      fontSize: {
        'display-1': [
          'var(--font-size-display-1)',
          'var(--line-height-display-1)',
        ],
        'display-2': [
          'var(--font-size-display-2)',
          'var(--line-height-display-2)',
        ],
        'display-3': [
          'var(--font-size-display-3)',
          'var(--line-height-display-3)',
        ],
        'display-4': [
          'var(--font-size-display-4)',
          'var(--line-height-display-4)',
        ],
        'display-5': [
          'var(--font-size-display-5)',
          'var(--line-height-display-5)',
        ],
        'display-6': [
          'var(--font-size-display-6)',
          'var(--line-height-display-6)',
        ],
        'heading-1': [
          'var(--font-size-heading-1)',
          'var(--line-height-heading-1)',
        ],
        'heading-2': [
          'var(--font-size-heading-2)',
          'var(--line-height-heading-2)',
        ],
        'heading-3': [
          'var(--font-size-heading-3)',
          'var(--line-height-heading-3)',
        ],
        'heading-4': [
          'var(--font-size-heading-4)',
          'var(--line-height-heading-4)',
        ],
        'heading-5': [
          'var(--font-size-heading-5)',
          'var(--line-height-heading-5)',
        ],
        'heading-6': [
          'var(--font-size-heading-6)',
          'var(--line-height-heading-6)',
        ],
        paragraph: [
          'var(--font-size-paragraph)',
          'var(--line-height-paragraph)',
        ],
        subtitle: ['var(--font-size-subtitle)', 'var(--line-height-subtitle)'],
        'form-label': [
          'var(--font-size-form-label)',
          'var(--line-height-form-label)',
        ],
        'form-input': [
          'var(--font-size-form-input)',
          'var(--line-height-form-input)',
        ],
        'form-error': [
          'var(--font-size-form-error)',
          'var(--line-height-form-error)',
        ],
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
        xs: ['var(--font-size-vinamilk-xs)', 'var(--line-height-vinamilk-xs)'],
        sm: ['var(--font-size-vinamilk-sm)', 'var(--line-height-vinamilk-sm)'],
        base: [
          'var(--font-size-vinamilk-base)',
          'var(--line-height-vinamilk-base)',
        ],
        md: ['var(--font-size-vinamilk-md)', 'var(--line-height-vinamilk-md)'],
        'x-md': [
          'var(--font-size-vinamilk-x-md)',
          'var(--line-height-vinamilk-x-md)',
        ],
        lg: ['var(--font-size-vinamilk-lg)', 'var(--line-height-vinamilk-lg)'],
        'x-lg': [
          'var(--font-size-vinamilk-x-lg)',
          'var(--line-height-vinamilk-x-lg)',
        ],
        xl: ['var(--font-size-vinamilk-xl)', 'var(--line-height-vinamilk-xl)'],
        xxl: [
          'var(--font-size-vinamilk-xxl)',
          'var(--line-height-vinamilk-xxl)',
        ],
        biggest: [
          'var(--font-size-vinamilk-biggest)',
          'var(--line-height-vinamilk-biggest)',
        ],
        greatest: [
          'var(--font-size-vinamilk-title-greatest)',
          'var(--line-height-vinamilk-title-greatest)',
        ],
      },
      lineHeight: {
        default: '1.4',
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
      zIndex: {
        header: 'var(--header-z-index)',
      },
      transitionProperty: {
        height: 'height, max-height',
        'height-appear': 'height, opacity',
        'background-color': 'background-color',
        spacing: 'margin, padding',
      },
      transitionTimingFunction: {
        'height-appear':
          'cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};
