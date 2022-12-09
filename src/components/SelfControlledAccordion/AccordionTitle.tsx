import React from "react";

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean

}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
}