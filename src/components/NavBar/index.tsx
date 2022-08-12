import {
    Burger,
    Center,
    Container,
    Group,
    Header,
    Menu,
    createStyles,
    Switch,
} from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoonStars, IconSun } from '@tabler/icons';
import { IconChevronDown } from '@tabler/icons';
import React from 'react';

const useStyles = createStyles((theme) => ({
    inner: {
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: 5,
    },

    toggle: {
        position: 'relative',
        '& *': {
            cursor: 'pointer',
        },
    },

    icon: {
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 1,
        top: 3,
    },

    iconLight: {
        left: 4,
        color: theme.white,
    },

    iconDark: {
        right: 4,
        color: theme.colors.gray[6],
    },
}));

interface HeaderSearchProps {
    logo: string;
    links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export default function DNavBar({ links, logo }: HeaderSearchProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger='hover' exitTransitionDuration={0}>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size={12} stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <Header height={56} mb={120}>
            <Container>
                <div className={classes.inner}>
                    <img style={{ width: '100%', maxWidth: '160px' }} src={logo} alt='' />
                    <Group spacing={5} className={classes.links}>
                        {items}
                        <div className={classes.toggle}>
                            <IconSun
                                className={cx(classes.icon, classes.iconLight)}
                                size={18}
                                stroke={1.5}
                            />
                            <IconMoonStars
                                className={cx(classes.icon, classes.iconDark)}
                                size={18}
                                stroke={1.5}
                            />
                            <Switch
                                checked={colorScheme === 'dark'}
                                onChange={() => toggleColorScheme()}
                                size='md'
                            />
                        </div>
                    </Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />
                </div>
            </Container>
        </Header>
    );
}
