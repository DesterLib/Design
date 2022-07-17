import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Tooltip from '.';

export default {
    title: 'Components/Data Dispaly/Tooltip',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
    content: 'Hello',
    children: 'Button',
};

export const Left = Template.bind({});
Left.args = {
    content: 'Hello',
    direction: 'left',
    children: 'Button',
};

export const Right = Template.bind({});
Right.args = {
    content: 'Hello',
    direction: 'right',
    children: 'Button',
};

export const Bottom = Template.bind({});
Bottom.args = {
    content: 'Hello',
    direction: 'bottom',
    children: 'Button',
};

export const WithHtml = Template.bind({});
WithHtml.args = {
    content: <><b>Anchor Tag</b> html tag</>,
    direction: 'right',
    children: 'Button',
};
