import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {ControlledOnOff} from "./ControlledOnOff";


export default {
    title: 'OnOff',
    component: ControlledOnOff,
    argTypes: {}
}

const Template1: ComponentStory<typeof ControlledOnOff> = (args) => <ControlledOnOff {...args} />;

export const OnStory = Template1.bind({});
OnStory.args = {
    on: true,
    setOn: action('Value change')
};

export const OffStory = Template1.bind({});
OffStory.args = {
    on: false,
    setOn: action('Value change')
};

const Template2: ComponentStory<typeof ControlledOnOff> = () => {

    const [on, setOn] = useState<boolean>(true)

    return <ControlledOnOff on={on} setOn={setOn}/>
}

export const ChangedOnOffStory = Template2.bind({});
ChangedOnOffStory.args = {};