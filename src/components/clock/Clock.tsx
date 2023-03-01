import React, {useEffect, useState} from 'react';

export const Clock = () => {
//     const getTime = () => {
//         const date = new Date(),
//             h = date.getHours(),
//             m = date.getMinutes(),
//             s = date.getSeconds()
//
//
//         return {h, m, s}
//     }
//
//
//     const [date, setDate] = useState(getTime())
//
//     useEffect(() => {
//         setInterval(() => {
//             setDate(getTime())
//         }, 1000)
//     }, [])
//
//
//     return (
//         <div style={{fontSize: '40px'}}>
//             {`${date.h}:${date.m}:${date.s}`}
//         </div>
//
//     )

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

    return (
        <div>
            <span>{twoDigitTime(date.getHours())}</span>
            :
            <span>{twoDigitTime(date.getMinutes())}</span>
            :
            <span>{twoDigitTime(date.getSeconds())}</span>
        </div>
    )
}

