import React from "react";
import {Star} from "./Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export const Rating = React.memo((props: RatingPropsType) => {


    return (
        <div>
            <Star value={1} setRatingValue={props.setRatingValue} selected={props.value > 0}/>
            <Star value={2} setRatingValue={props.setRatingValue} selected={props.value > 1}/>
            <Star value={3} setRatingValue={props.setRatingValue} selected={props.value > 2}/>
            <Star value={4} setRatingValue={props.setRatingValue} selected={props.value > 3}/>
            <Star value={5} setRatingValue={props.setRatingValue} selected={props.value > 4}/>
        </div>
    )
})