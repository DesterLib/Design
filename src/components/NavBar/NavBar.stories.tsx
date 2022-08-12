import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import DNavBar from '.';
import Logo from '../../../assets/logo/logo-light-full.svg';

export default {
    title: 'Components/NavBar',
    component: DNavBar,
} as ComponentMeta<typeof DNavBar>;

const Template: ComponentStory<typeof DNavBar> = (args) => <DNavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    logo: Logo,
    links: [
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
    ],
};
