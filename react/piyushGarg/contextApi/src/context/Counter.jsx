
import React from 'react'
import {createContext , useState} from 'react'

const CounterContext = createContext(null) ;

export const CounterProvider = (props) => {
    const [count , setCount] = useState(5) ;
    return (
        <CounterContext.Provider value = {{count , setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContext
