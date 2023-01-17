import React from "react";

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    //collapsed: boolean

}

export const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {

    console.log('AccordionTitle')

    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
})