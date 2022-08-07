import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Badge from ".";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Action",
};

export const Link = Template.bind({});
Link.args = {
  label: "Action",
  link: '/search'
};