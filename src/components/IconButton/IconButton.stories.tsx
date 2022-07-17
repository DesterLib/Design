import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { IconButton } from '.';

export default {
  title: 'Components/Data Dispaly/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'circle',
};

export const Wide = Template.bind({});
Wide.args = {
  icon: 'circle',
  wide: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: 'circle',
  disabled: true,
};
