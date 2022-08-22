import ThemeContext from 'main/theme/themeContext';
import { DesterUIThemeContext } from 'main/theme/types';
import React from 'react';

const useTheme = (): DesterUIThemeContext => React.useContext<DesterUIThemeContext>(ThemeContext);

export default useTheme;
