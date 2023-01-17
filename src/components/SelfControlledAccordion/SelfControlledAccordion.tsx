import React, {useReducer} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {reducer} from "./reducer";

type AccordionPropsType = {
    title: string
    //collapsed: boolean
}



export const SelfControlledAccordion = React.memo((props: AccordionPropsType) => {

    console.log('SelfControlledAccordion')

    //const [collapsed, setCollapsed] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.title} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            <AccordionTitle title={props.title}
                            setCollapsed={() => {
                                dispatch({type: 'TOGGLE-COLLAPSED'})
                            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
})