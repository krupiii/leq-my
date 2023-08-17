import React, { useState } from 'react'
import Krupali2 from './Krupali2'

const Krupali = () => {

    const array = ["Ashsih", "Krupali", "Abhay", "Sahil", "Renci"];
    const [name, setName] = useState(array[0]);
    const [number, setNumber] = useState(0)

    const ClcikToGetNAme = () => {
        if (array.length - 1 === number) {
            setName(array[0])
            setNumber(0)
        } else {
            setName(array[number + 1])
            setNumber(number + 1)
        }
    }

    return (
        <>
            <Krupali2
                ClcikToGetNAme={ ClcikToGetNAme }
                name={ name }
            />
        </>
    )
}

export default Krupali