import React from "react";
import {ItemType} from "./Accordion";

type AccordionBodyType = {
    items: ItemType[]
    onClick: (v: any) => void
}

export const AccordionBody = React.memo((props: AccordionBodyType) => {
    return <ul>
        {props.items.map((i, k) => <li key={k} onClick={() => {
            props.onClick(i.value)
        }}>{i.title}</li>)}

    </ul>
})