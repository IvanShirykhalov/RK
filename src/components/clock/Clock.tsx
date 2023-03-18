import React, {useEffect, useState} from 'react';

import {TwentyFourHours} from "./TwentyFourHours";
import {AnalogClock} from "./AnalogClock";
import {AmPm} from "./AmPm";

type PropsType = {
    mode?: 'analog' | 'digital' | 'am/pm'
}

export const Clock = (props: PropsType) => {


    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)


        return () => {
            clearInterval(interval)
        }

    }, [])

    const [date, setDate] = useState(new Date())


    const twoDigitTime = (time: number) => time < 10 ? `0${time}` : time

    const AmPmClock = (hours: number) => hours > 10 ? twoDigitTime(hours - 12) : twoDigitTime(hours)


    let view

    switch (props.mode) {
        case "digital":

            return view =
                <TwentyFourHours
                    hours={twoDigitTime(date.getHours())}
                    minutes={twoDigitTime(date.getMinutes())}
                    seconds={twoDigitTime(date.getSeconds())}
                />

        case "am/pm":

            return view =

                <AmPm
                    hours={twoDigitTime(+AmPmClock(date.getHours()))}
                    minutes={twoDigitTime(date.getMinutes())}
                    seconds={twoDigitTime(date.getSeconds())}
                />
        case 'analog':
        default:
            return view =
                <AnalogClock
                    hours={AmPmClock(date.getHours())}
                    minutes={twoDigitTime(date.getMinutes())}
                    seconds={twoDigitTime(date.getSeconds())}
                />

    }


}

export type ClockPropsType = {
    hours: number | string
    minutes: number | string
    seconds: number | string
}


