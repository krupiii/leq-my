/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Disable = () => {
    const [count, setCount] = useState([])

    const [input, setInput] = useState(null)

    const clickToadd = (e) => {
        const data = {
            name: "",
            email: "",
            disname: false,
            disemail: false,
        }
        setInput(count.length)
        setCount([...count, data])
        console.log(data);
    }

    const clickTodisable = () => {
        count.map((item, i) => {
            let name = document.getElementById(`name${i}`).value;
            let email = document.getElementById(`email${i}`).value;

            if (name || email) {
                item.name = name
                item.email = email
            }
            if (name) {
                item.disname = true
            }
            if (email) {
                item.disemail = true
            }
        })
        let ans = [...count]
        setCount(ans)
    }
    return (
        <>
            <button className='m-5' onClick={ clickToadd }>Add+</button>

            {
                count.map((krupali, index) => {
                    return (
                        <tr key={ index }>
                            { console.log(krupali) }
                            <th>{ index + 1 }</th>

                            <label htmlFor=""
                                className='m-3'>
                                name:
                                <input type="text"
                                    id={ `name${index}` }
                                    disabled={ krupali.disname ? "disabled" : null } />
                            </label>

                            <label htmlFor=""
                                className='m-3'>
                                email:
                                <input type="text"
                                    id={ `email${index}` }
                                    disabled={ krupali.disemail ? "disabled" : null } />
                            </label>
                        </tr>
                    )
                })
            }
            <button
                className='m-3'
                onClick={ clickTodisable }
            >
                Save
            </button >

        </>
    )
}

export default Disable