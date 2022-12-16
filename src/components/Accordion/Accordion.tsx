import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div onClick={() => props.setAccordionCollapsed(!props.collapsed)}>
            <AccordionTitle title={props.title}/>
            {props.collapsed ? <AccordionBody/> : ''}
        </div>
    )
}