import useSSR from 'hooks/useSsr';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
// @ts-ignore
import deepMerge from 'utils/deepMerge';
import { copyObject } from 'utils/object';
import withDefaults from 'utils/withDefaults';

import CssBaseline from 'components/CssBaseline';

import ThemeContext, { defaultContext } from './themeContext';
import { CreateTheme, DesterUIThemeContext, ThemeType } from './types';
import { changeTheme, getDocumentCSSTokens, getDocumentTheme, getThemeName } from './utils';

export interface Props {
    theme?: CreateTheme;
    disableBaseline?: boolean;
}

const defaultProps = {
    disableBaseline: false,
};

export type ThemeProviderProps = Props & typeof defaultProps;

const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
    theme: userTheme,
    disableBaseline,
    children,
}) => {
    const { isBrowser } = useSSR();

    const [currentTheme, setCurrentTheme] = useState<ThemeType | string>(defaultContext.type);

    const changeCurrentTheme = (type: ThemeType | string) => {
        setCurrentTheme((ct) => (ct !== type ? type : ct));
    };

    const changeTypeBaseEl = (el: HTMLElement) => {
        const themeValue = getDocumentTheme(el);
        themeValue && changeCurrentTheme(themeValue);
    };

    const providerValue = useMemo<DesterUIThemeContext>(() => {
        const themeTokens = isBrowser ? getDocumentCSSTokens() : {};
        const theme = deepMerge(copyObject(defaultContext.theme), themeTokens);
        const themeName = getThemeName(currentTheme);
        return {
            theme,
            type: themeName,
            isDark: themeName === 'dark',
        };
    }, [currentTheme, isBrowser]);

    useEffect(() => {
        // initial set
        changeTypeBaseEl(document?.documentElement);

        const observer = new MutationObserver((mutation) => {
            if (mutation && mutation.length > 0 && mutation[0]?.target.nodeName === 'BODY') {
                const documentTheme = document?.body?.dataset?.theme;
                documentTheme && changeCurrentTheme(documentTheme);
            } else {
                changeTypeBaseEl(document?.documentElement);
            }
        });

        observer.observe(document?.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme', 'style'],
        });

        observer.observe(document?.body, {
            attributes: true,
            attributeFilter: ['data-theme', 'style'],
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isBrowser || !userTheme) {
            return;
        }
        if (userTheme?.className) {
            changeTheme(userTheme.className);
            changeCurrentTheme(getThemeName(userTheme.className));
        }
    }, [isBrowser, userTheme]);

    return (
        <ThemeContext.Provider value={providerValue}>
            {!disableBaseline && <CssBaseline />}
            {children}
        </ThemeContext.Provider>
    );
};

export default withDefaults(ThemeProvider, defaultProps);
