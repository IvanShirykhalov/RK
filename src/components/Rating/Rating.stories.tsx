import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {Rating, RatingPropsType} from "./Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating',
    component: Rating,
    argTypes: {}
}

const Template1: ComponentStory<typeof Rating> = (args: RatingPropsType) => <Rating {...args} />;

export const RatingStory = Template1.bind({});
RatingStory.args = {
    value: 0,
    setRatingValue: action('Change value')
};

const Template2: ComponentStory<typeof Rating> = (args) => {
    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return <Rating value={ratingValue} setRatingValue={setRatingValue}/>
}
export const RatingLocalStateStory = Template2.bind({});
RatingLocalStateStory.args = {
    value: 0,
    setRatingValue: action('Change rating')

};