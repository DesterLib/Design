import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Card from '.';

export default {
    title: 'Components/Data Dispaly/Card',
    component: Card,
    args: { variant: 'portrait' },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: 'https://www.themoviedb.org/t/p/w1280/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg'
};

export const Landscape = Template.bind({});
Landscape.args = {
    variant: 'landscape',
    image: 'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/lcTuggU70y6pt6x13Rv1Ffjs93K.jpg'
};
