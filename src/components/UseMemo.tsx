import React, {useMemo, useState} from 'react';

export const UseMemo = () => {

    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)

    let resA = 1
    let resB = 1

    resA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            temp = temp * i
        }
        return temp
    }, [a])


    for (let i = 1; i <= b; i++) {
        resB = resB * i
    }


    return (
        <div>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>
            <hr/>
            <div>Result for a : {resA}</div>
            <div>Result for b : {resB}</div>
        </div>
    );
};
