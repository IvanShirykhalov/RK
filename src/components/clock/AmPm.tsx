import React from "react";
import {ClockPropsType} from "./Clock";

export const AmPm = (props: ClockPropsType) => {
    return (
        <div>
            <span>{props.hours}</span>
            :
            <span>{props.minutes}</span>
            :
            <span>{props.seconds}</span>
        </div>
    )
}