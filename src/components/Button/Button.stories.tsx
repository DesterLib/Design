import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '.';

export default {
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'filled',
    children: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'filled',
    children: 'secondary',
};
