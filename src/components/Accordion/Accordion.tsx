import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: () => void
    items: ItemType[]
    onClick: (v: any) => void
}

export const Accordion = React.memo((props: AccordionPropsType) => {
    return (
        <div onClick={props.setAccordionCollapsed}>
            <AccordionTitle title={props.title}/>
            {props.collapsed ? <AccordionBody items={props.items} onClick={props.onClick}/> : ''}
        </div>
    )
})