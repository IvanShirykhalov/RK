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

export const AccordionUncollapsedStory = Template1.bind({});
AccordionUncollapsedStory.args = {
    title: 'Accordion',
    collapsed: true,
    setAccordionCollapsed: action('change collapsed'),
    items: [{value: 'x', title: 'x1'}, {value: 'y', title: 'y2'}, {value: 'z', title: 'z3'},],
    onClick: (id) => {
        alert(`user ${id}`)
    }
};

export const AccordionCollapsedStory = Template1.bind({});
AccordionCollapsedStory.args = {
    title: 'Accordion',
    collapsed: true,
    setAccordionCollapsed: action('change collapsed'),
    items: [],
    onClick: action('some items was clicked')
};

const Template2: ComponentStory<typeof Accordion> = (args) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Accordion collapsed={collapsed} setAccordionCollapsed={() => setCollapsed(!collapsed)}
                      title={args.title} items={args.items} onClick={args.onClick}/>;
}
export const AccordionLocalStateStory = Template2.bind({});
AccordionLocalStateStory.args = {
    title: 'Accordion useState',
    items: [{value: 'x', title: 'x1'}, {value: 'y', title: 'y2'}, {value: 'z', title: 'z3'},],
    onClick: (id) => {
        alert(`user value -  ${id}`)
    }
};