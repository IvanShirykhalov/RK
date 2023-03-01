import React, {useEffect, useMemo, useState} from 'react';


function generateData() {
    console.log('generateData')
    //difficult counting
    return 12345
}

export const UseState = () => {
    const [count, setCount] = useState<number>(0)
    const [fake, setFake] = useState<number>(0)
    console.log('useState')

    //const initValue = useMemo(generateData, [])

    useEffect(() => {
        console.log('useEffect every render')
        document.title = count.toString()
    })    // every render
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = count.toString()
    }, [])   // only first render (componentDidMount)
    useEffect(() => {
        console.log('useEffect first render and count changed')
        document.title = count.toString()
    }, [count]) // first render and count changed

    //const changer = (state: number) => state + 1


    return (
        <>
            Count: {count} Fake: {fake}
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setFake(fake + 1)}>+</button>
            </div>
        </>
    );
};


export const UseEffectSetTimeOut = () => {
    const [count, setCount] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)
    console.log('useState')

    //const initValue = useMemo(generateData, [])

    // useEffect(() => {
    //     console.log('useEffect every render')
    //     document.title = count.toString()
    // })    // every render

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = count.toString()
    //     }, 1000)
    // }, [count])

    useEffect(() => {
        setInterval(() => {
            setCount((state) => state + 1)
        }, 1000)
    }, [])

    return (
        <>
            count: {count}, fake: {fake}
            {/*Count: {count} Fake: {fake}*/}
            {/*<div>*/}
            {/*    <button onClick={() => setCount(count + 1)}>+</button>*/}
            {/*    <button onClick={() => setFake(fake + 1)}>+</button>*/}
            {/*</div>*/}
        </>
    );

}


