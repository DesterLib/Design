import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, TypographyProps } from '.';

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TypographyProps> = args => <Typography {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
