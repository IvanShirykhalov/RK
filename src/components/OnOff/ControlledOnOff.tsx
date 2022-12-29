import React from 'react';

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const ControlledOnOff = (props: OnOffPropsType) => {


    const onStyle = {
        width: '50px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'green' : '',
    }
    const offStyle = {
        width: '50px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: props.on ? '' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        margin: '2.5px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle} onClick={() => {
                props.setOn(!props.on)
            }}></div>
        </div>
    );
};
