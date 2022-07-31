import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '.';

export default {
  title: 'Components/Data Dispaly/Button',
  component: Button,
  args: { variant: 'primary' },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};

export const Size = Template.bind({});
Size.args = {
  children: 'Button',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: 'home',
  children: 'HOME',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: 'home',
  children: 'HOME',
};
