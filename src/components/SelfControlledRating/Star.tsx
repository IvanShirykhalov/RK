import React from "react";

type StarPropsType = {
    selected: boolean
    setValue: () => void

}


export function Star(props: StarPropsType) {
    return (
        <>
            <span onClick={() => props.setValue()}>{props.selected ? <b> Star </b> : ' Star '}</span>
        </>
    )
}