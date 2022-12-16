import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {SelfControlledOnOff} from "./components/OnOff/SelfControlledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(true)

    return (
        <div className={'App'}>

            {/*            <PageTitle title={'This is APP component'}/>
            <Rating value={2}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={true}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <SelfControlledRating/>
            <Accordion title={'Menu'} setAccordionCollapsed={setAccordionCollapsed} collapsed={accordionCollapsed}/>
            <SelfControlledOnOff setOn={setOn} on={on}/>

            {/*            <OnOff/>
            <SelfControlledAccordion title={'Self control'}/>
            <SelfControlledRating/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
