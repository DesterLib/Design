import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Button from ".";

export default {
  title: "Components/Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "PLAY",
  startIcon: "play_arrow",
};

export const Secondary = Template.bind({});
Secondary.args = {
  startIcon: "play_arrow",
  color: "secondary",
};
