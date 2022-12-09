import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {SelfControlledAccordion} from "./components/SelfControlledAccordion/SelfControlledAccordion";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";

function App() {
    return (
        <div className={'App'}>
            {/*
            <PageTitle title={'This is APP component'}/>
            <Rating value={2}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={true}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            */}
            <OnOff/>
            <SelfControlledAccordion title={'Self control'}/>
            <SelfControlledRating/>
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
