import React, { useReducer } from 'react'

const initialState = {count: 0}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
    case 'decrement':
        return {count: state.count - 1}
    default:
        throw new Error()
    }
}

export default function Count_Use_Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
        )
}

/*
Combining Logic and State with useReducer
The useReducer hook is an alternative to useState that’s useful for complex state updates or situa-
tions where the new state depends on the previous state.

Whereas useState takes just an initial state as its argument, useReducer takes an initial state and a reducer as its arguments.
A reducer is a pure function that takes the current state and an object called an action and returns the new state.
In other words, here’s the signature of a reducer function:
(state, action) => newState

The useReducer hook returns a value and a dispatch function.
A dispatch function can be used in response to events, but instead of taking a value to set the stateful variable to, it takes an action
object.
An action object has a type and an optional payload.

Using reducers is quite a bit more complicated than simple state updates.


*/
