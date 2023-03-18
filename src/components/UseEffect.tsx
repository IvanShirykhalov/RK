import React, {useEffect, useState} from 'react';

export const UseEffect = () => {


    const [counter, setCounter] = useState<number>(0)

    console.log('component render ' + counter)

    useEffect(() => {

        console.log('effect happened ' + counter)


        return () => {
            console.log('res effect ' + counter)
        }
    }, [counter])

    return (
        <div>
            score: {counter}
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        </div>
    );
};

export const KeysTrackerExample = () => {


    const [text, setText] = useState<string>('')

    console.log('component render ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)

        }

        window.addEventListener('keypress', handler)
        return () => {
            (window.removeEventListener('keypress', handler))
        }
    }, [text])

    return (
        <span>
            x: {text}
        </span>
    );
};

export const SetTimeoutExample = () => {


    const [text, setText] = useState<string>('')

    console.log('component render ' + text)

    useEffect(() => {
        const interval = setTimeout(() => {
            setText('3 sec')
        }, 3000)

        return (() => {
            clearInterval(interval)
        })

    }, [])

    return (
        <span>
            x: {text}
        </span>
    );
};
