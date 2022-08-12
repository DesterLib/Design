import { Avatar, Menu, Navbar, Stack, Tooltip, UnstyledButton, createStyles } from '@mantine/core';
import React from 'react';

import Icon from '../IconWrapper';

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: theme.radius.lg,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
                .background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface LinkProps {
    icon?: string;
    label?: string;
    active?: boolean;
    onClick?(): void;
    auth?: {
        authenticated: boolean;
        name?: string;
        email?: string;
        image?: string;
        menu: {
            label?: boolean;
            icon?: string;
            text: string;
            divider?: boolean;
            color?: string;
            onClick?(): void;
        }[];
    };
}

function NavbarLink({ icon = '', label, ...props }: LinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position='right' transitionDuration={0}>
            <UnstyledButton className={cx(classes.link)} mb={2} {...props}>
                <Icon icon={icon} />
            </UnstyledButton>
        </Tooltip>
    );
}

function ProfileLink({ label, auth, ...props }: LinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label='Profile' position='right' transitionDuration={0}>
            <Menu position='right-end'>
                <Menu.Target>
                    <UnstyledButton className={cx(classes.link)} mb={2} {...props}>
                        {auth && auth.authenticated && <Avatar src={auth.image} alt={auth.name} />}
                        {auth && auth.authenticated === false && <Icon icon='login' />}
                    </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                    {auth?.menu.map((item) => (
                        <>
                            {item.label && <Menu.Label>{item.text}</Menu.Label>}
                            {item.divider && <Menu.Divider />}
                            {!item.label && (
                                <Menu.Item color={item.color || ''} icon={item.icon && <Icon icon={item.icon} />}>
                                    {item.text}
                                </Menu.Item>
                            )}
                        </>
                    ))}
                </Menu.Dropdown>
            </Menu>
        </Tooltip>
    );
}

export interface DataProps {
    data: {
        top: {
            icon: string;
            label: string;
        }[];
        bottom: {
            auth: {
                authenticated: boolean;
                name?: string;
                email?: string;
                image?: string;
                menu: {
                    label?: boolean;
                    icon?: string;
                    text: string;
                    divider?: boolean;
                    color?: string;
                    onClick?(): void;
                }[];
            };
        };
    };
    hidden: boolean;
}

export default function DSideBar({ data, hidden }: DataProps) {
    const links = data.top.map((link) => (
        <NavbarLink {...link} key={link.label} onClick={() => console.log('hello')} />
    ));

    return (
        <Navbar height={750} width={{ base: 80 }} p='md' hidden={hidden} hiddenBreakpoint='sm'>
            <Navbar.Section grow mt={50}>
                <Stack justify='center' spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section mb={15}>
                <Stack justify='center' spacing={0}>
                    <ProfileLink auth={data.bottom.auth} />
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}
