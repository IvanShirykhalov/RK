import React from "react";

type StarPropsType = {
    selected: boolean
}


export function Star(props: StarPropsType) {
    return (
        <>
            {props.selected ? <span><b> Star </b></span> : <span> Star </span>}


        </>
    )
}