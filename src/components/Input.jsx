import React, { useState } from 'react'

const Input = () => {
    const [count, setCount] = useState(0);

    const clickToPLus = () => {
        setCount(count + 1);
    }

    const clickToMinus = () => {
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={ clickToPLus } disabled={ count >= 10 }>+</button>
            <p>{ count }</p>
            <button onClick={ clickToMinus } disabled={ count <= 0 }>-</button>
        </>
    )
}

export default Input