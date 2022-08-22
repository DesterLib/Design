import React from 'react';

import { theme } from './stitches.config';
import { DesterUIThemeContext } from './types';

export const defaultContext: DesterUIThemeContext = {
    isDark: false,
    theme,
    type: 'light',
};

const ThemeContext: React.Context<DesterUIThemeContext> =
    React.createContext<DesterUIThemeContext>(defaultContext);

export default ThemeContext;
