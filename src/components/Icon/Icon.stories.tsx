import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Icon from '.';

export default {
    title: 'Components/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'home',
};
