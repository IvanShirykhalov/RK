import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {}
}

const Template1: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionStory = Template1.bind({});
AccordionStory.args = {
    title: 'Accordion',
    collapsed: true,
    setAccordionCollapsed: action('change collapsed')
};

const Template2: ComponentStory<typeof Accordion> = (args) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Accordion collapsed={collapsed} setAccordionCollapsed={() => setCollapsed(!collapsed)}
                      title={args.title}/>;
}
export const AccordionLocalStateStory = Template2.bind({});
AccordionLocalStateStory.args = {
    title: 'Accordion useState'
};