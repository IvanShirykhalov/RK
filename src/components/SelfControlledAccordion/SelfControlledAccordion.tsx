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
        <div onClick={() => {
            setCollapsed(!collapsed)
        }}>
            <button>
                <AccordionTitle title={props.title}/>
            </button>
            {/*{props.collapsed ? '' : <AccordionBody/>}*/}
            {collapsed ? '' : <AccordionBody/>}
        </div>
    )
}