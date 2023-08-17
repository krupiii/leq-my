import React from 'react'

const Array2 = (props) => {
    return (
        <>
            <button onClick={ props.clickToPlus }>+</button>
            <p>{ props.count }</p>
            <button onClick={ props.clickToMinus }>-</button>
        </>
    )
}

export default Array2