import {
    AppShell,
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    useMantineTheme,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import LogoLightFull from '../assets/logo/logo-dark-full.svg';
import LogoDarkFull from '../assets/logo/logo-light-full.svg';
import DNavBar from '../src/components/NavBar';
import DSideBar from '../src/components/SideBar';
import darkTheme from '../src/theme/darkTheme';
import lightTheme from '../src/theme/lightTheme';

const App = () => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);
    const [opened, setOpened] = React.useState(false);
    const theme = useMantineTheme();
    console.log(theme);
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={colorScheme === 'light' ? lightTheme : darkTheme}
                withGlobalStyles
                withNormalizeCSS
            >
                <AppShell
                    navbarOffsetBreakpoint='sm'
                    asideOffsetBreakpoint='sm'
                    navbar={
                        <DSideBar
                            data={{
                                top: [
                                    { icon: 'home-2', label: 'Home' },
                                    { icon: 'brand-safari', label: 'Browse' },
                                    { icon: '', label: 'Analytics' },
                                    { icon: '', label: 'Releases' },
                                    { icon: '', label: 'Account' },
                                    { icon: '', label: 'Security' },
                                    { icon: '', label: 'Settings' },
                                ],
                                bottom: {
                                    auth: {
                                        authenticated: true,
                                        name: 'Alken',
                                        email: 'desteralken@gmail.com',
                                        image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n20WIggAI2Mmwa4OAkPnCSrCx1j.jpg',
                                        menu: [
                                            {
                                                text: 'Account',
                                                label: true,
                                            },
                                            {
                                                icon: 'user-circle',
                                                text: 'Profile',
                                            },
                                            {
                                                icon: 'settings',
                                                text: 'Settings',
                                                divider: true,
                                            },
                                            {
                                                icon: 'logout',
                                                text: 'Logout',
                                            },
                                        ],
                                    },
                                },
                            }}
                            hidden={!opened}
                        />
                    }
                    header={
                        <DNavBar
                            logo={colorScheme === 'light' ? LogoLightFull : LogoDarkFull}
                            links={links}
                        />
                    }
                    styles={(theme) => ({
                        main: {
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[8]
                                    : theme.colors.gray[0],
                        },
                    })}
                >
                    <p>Hello</p>
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

const links = [
    {
        link: '/about',
        label: 'Features',
    },
    {
        link: '#1',
        label: 'Learn',
        links: [
            {
                link: '/docs',
                label: 'Documentation',
            },
            {
                link: '/resources',
                label: 'Resources',
            },
            {
                link: '/community',
                label: 'Community',
            },
            {
                link: '/blog',
                label: 'Blog',
            },
        ],
    },
    {
        link: '/about',
        label: 'About',
    },
    {
        link: '/pricing',
        label: 'Pricing',
    },
    {
        link: '#2',
        label: 'Support',
        links: [
            {
                link: '/faq',
                label: 'FAQ',
            },
            {
                link: '/demo',
                label: 'Book a demo',
            },
            {
                link: '/forums',
                label: 'Forums',
            },
        ],
    },
];

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
