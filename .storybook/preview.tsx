import { ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

// import baseTheme from '../src/theme/baseTheme';
import darkTheme from '../src/theme/darkTheme';
import lightTheme from '../src/theme/lightTheme';

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Theme for the components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',
            items: [
                { value: 'light', icon: 'circlehollow', title: 'light' },
                { value: 'dark', icon: 'circle', title: 'dark' },
                { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
            ],
            showName: true,
        },
    },
};

export const decorators = [
    (StoryFn: any, context: any) => {
        const theme = context.parameters.theme || context.globals.theme;
        const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
            key: 'mantine-color-scheme',
            defaultValue: 'light',
            getInitialValueInEffect: true,
        });

        const toggleColorScheme = (value?: ColorScheme) =>
            setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

        useHotkeys([['mod+J', () => toggleColorScheme()]]);
        const storyTheme = theme === 'light' ? lightTheme : darkTheme;
        switch (theme) {
            case 'side-by-side': {
                return (
                    <>
                        <MemoryRouter initialEntries={['/']}>
                            <ColorSchemeProvider
                                colorScheme={theme}
                                toggleColorScheme={toggleColorScheme}
                            >
                                <MantineProvider withGlobalStyles theme={lightTheme}>
                                    <div>
                                        <StoryFn />
                                    </div>
                                </MantineProvider>
                            </ColorSchemeProvider>
                            <ColorSchemeProvider
                                colorScheme={colorScheme}
                                toggleColorScheme={toggleColorScheme}
                            >
                                <MantineProvider withGlobalStyles theme={darkTheme}>
                                    <div>
                                        <StoryFn />
                                    </div>
                                </MantineProvider>
                            </ColorSchemeProvider>
                        </MemoryRouter>
                    </>
                );
            }
            default: {
                return (
                    <MemoryRouter initialEntries={['/']}>
                        <ColorSchemeProvider
                            colorScheme={theme}
                            toggleColorScheme={toggleColorScheme}
                        >
                            <MantineProvider withGlobalStyles theme={storyTheme}>
                                <div>
                                    <StoryFn />
                                </div>
                            </MantineProvider>
                        </ColorSchemeProvider>
                    </MemoryRouter>
                );
            }
        }
    },
];
