import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div onClick={props.setAccordionCollapsed}>
            <AccordionTitle title={props.title}/>
            {props.collapsed ? <AccordionBody/> : ''}
        </div>
    )
}