import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import NavBar from ".";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
    config: {
        name: 'Dester',
        logo_light: '',
        logo_dark: ''
    }
};