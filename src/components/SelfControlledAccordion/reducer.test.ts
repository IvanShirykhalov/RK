import {reducer, StateType} from "./reducer";


test('collapsed should be false', ()=>{

    const state: StateType = {
        collapsed: true
    }

   const endState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(endState.collapsed).toBe(false)

})

test('collapsed should be true', ()=>{

    const state: StateType = {
        collapsed: false
    }

    const endState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(endState.collapsed).toBe(true)

})