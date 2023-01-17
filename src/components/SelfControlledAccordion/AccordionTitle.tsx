import React from "react";

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    //collapsed: boolean

}

export function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle')

    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}