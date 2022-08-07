import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import IconButton from ".";

export default {
  title: "Components/Buttons/Icon Button",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: "play_arrow",
};
