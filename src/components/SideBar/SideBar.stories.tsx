import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import DSideBar from '.';

export default {
    title: 'Components/SideBar',
    component: DSideBar,
} as ComponentMeta<typeof DSideBar>;

const Template: ComponentStory<typeof DSideBar> = (args) => <DSideBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    data: {
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
                        divider: true
                    },
                    {
                        icon: 'logout',
                        text: 'Logout',
                        color: 'red'
                    }
                ],
            },
        },
    },
};
