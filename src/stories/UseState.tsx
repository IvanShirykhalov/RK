import React, {useMemo, useState} from 'react';


function generateData() {
    console.log('generateData')
    //difficult counting
    return 12345
}

export const UseState = () => {
    console.log('useState')

    //const initValue = useMemo(generateData, [])

    const changer = (state: number) => state + 1

    const [count, setCount] = useState<number>(generateData)


    return (
        <>
            <button onClick={() => setCount(changer)}>
                +
            </button>
            {count}
        </>
    );
};

