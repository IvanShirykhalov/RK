import React, {useState} from 'react';

type OnOffPropsType = {
    // on: boolean
}

export const SelfControlledOnOff = (props: OnOffPropsType) => {

    const [on, setOn] = useState<boolean>(true)

    const onStyle = {
        width: '50px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : '',
    }
    const offStyle = {
        width: '50px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: on ? '' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2.5px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle} onClick={() => {
                setOn(!on)
            }}></div>
        </div>
    );
};
