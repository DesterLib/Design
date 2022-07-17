const lightThemeDefaults = {
  mode: 'light',
  palette: {
    primary: {
      main: '#00FFB3',
      light: '#3FFFB3',
      dark: '#00DBAF',
      text: '#ffffff',
    },
    secondary: {
      main: '#2A3235',
      light: '#708185',
      dark: '#1E282D',
      text: '#ffffff',
    },
    error: {
      main: '#FF3564',
      light: '#FF677C',
      dark: '#DB2662',
      text: '#ffffff',
    },
    warning: {
      main: '#FF9E16',
      light: '#FFBD50',
      dark: '#DB7E10',
      text: '#ffffff',
    },
    info: {
      main: '#286CFF',
      light: '#5D95FF',
      dark: '#1D53DB',
      text: '#ffffff',
    },
    success: {
      main: '#84EF6A',
      light: '#4FE53B',
      dark: '#30C42B',
      text: '#ffffff',
    },
    background: {
      paper: '#e9e9e9',
      default: '#ffffff',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)',
    },
  },
  shape: {
    borderRadius: {
      xs: '4px',
      s: '8px',
      m: '16px',
      l: '24px',
      xl: '32px',
      xxl: '40px',
      round: '50%',
    },
  },
  shadows: {
    card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
    inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  },
  spacing: {
    xxs: `${0.25 * 1}em`,
    xs: `${0.5 * 1}em`,
    s: `${1}em`,
    m: `${1.25 * 1}em`,
    l: `${2 * 1}em`,
    xl: `${3.25 * 1}em`,
    xxl: `${5.25 * 1}em`,
  },
  typography: {
    fontSize: {
      body: '1.125rem',
      bodyS: '1rem',
      bodyXS: '0.9rem',
      bodyXXS: '0.72rem',
      heading1: '2.74rem',
      heading2: '2.19rem',
      heading3: '1.75rem',
      heading4: '1.4rem',
    },
    fontWeight: {
      black: '900',
      bold: '700',
      medium: '500',
      regular: '400',
    },
  },
};

export default lightThemeDefaults;
