import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,

}

const Template1: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('1')


    return <Select value={value}
                   onChange={setValue}
                   items={
                       [
                           {value: '1', title: 'Moscow'},
                           {value: '2', title: 'Kazan'},
                           {value: '3', title: 'Omsk'},
                       ]
                   }
    />
};

export const SelectStories = Template1.bind({});
SelectStories.args = {}

