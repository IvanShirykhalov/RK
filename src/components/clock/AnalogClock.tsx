import React from "react";
import {ClockPropsType} from "./Clock";
import './AnalogClock.css'

export const AnalogClock = (props: ClockPropsType) => {

    const secondsStyle = {
        transform: `rotate(${+props.seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${+props.minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${+props.hours * 30}deg)`
    };

    return (
        <div className={"clock"}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>
        </div>
    )
}