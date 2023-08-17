import React, { useState } from 'react'
import Array2 from './Array2'

const Array = () => {
    const [count, setCount] = useState(0);
    const clickToPlus = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            console.log('Cross limit');
        }
    }
    const clickToMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            console.log('Cross limit');
        }
    }
    return (
        <>
            <Array2
                clickToPlus={ clickToPlus }
                clickToMinus={ clickToMinus }
                count={ count }
            />
        </>
    )
}

export default Array