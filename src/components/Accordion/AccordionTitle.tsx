import React from "react";

type AccordionTitlePropsType = {
    title: string
}

export const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    return <h3>{props.title}</h3>
})