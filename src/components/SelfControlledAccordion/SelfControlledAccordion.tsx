import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    //collapsed: boolean
}

export function SelfControlledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div>
            <AccordionTitle title={props.title} collapsed={collapsed} setCollapsed={setCollapsed}/>
            {collapsed ? '' : <AccordionBody/>}
        </div>
    )
}