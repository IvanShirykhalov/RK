import React from "react";
import {RatingValueType} from "./Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}


export const Star = React.memo((props: StarPropsType) => {
    return (
        <span onClick={() => {
            props.setRatingValue(props.value)
        }}>
            {props.selected ? <b>Star </b> : 'Star '}

        </span>
    )
})