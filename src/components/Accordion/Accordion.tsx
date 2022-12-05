import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {/*{props.collapsed ? '' : <AccordionBody/>}*/}
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}