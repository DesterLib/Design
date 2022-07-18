import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Card from '.';

export default {
    title: 'Components/Data Dispaly/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
};