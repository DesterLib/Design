import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import IconButton from '.';

export default {
    title: 'Components/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'filled',
    icon: 'home',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'filled',
    icon: 'search',
};
