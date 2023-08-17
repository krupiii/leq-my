import React, { useState } from 'react'
import { useEffect } from 'react'

const TableInput = () => {
    const [inputVal, setInputVal] = useState('')
    const [inputValT, setInputValT] = useState('')

    useEffect(() => {
        console.log('Effect called...');
    })
    useEffect(() => {
        console.log('Effect called...');
    })
    useEffect(() => {
        console.log('Effect called...');
    }, [inputVal])

    return (
        <>
            <div>
                Name
                <input className='m-2'
                    type="text"
                    value={ inputVal }
                    onChange={ (e) => setInputVal(e.target.value) } />

                Email
                <input
                    className='m-2'
                    type="text"
                    value={ inputValT }
                    onChange={ (e) => setInputValT(e.target.value) }
                />
            </div>
        </>
    )
}

export default TableInput