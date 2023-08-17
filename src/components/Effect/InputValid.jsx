import React from 'react'

const InputValid = ({ name, email }) => {
    // const { name, email } = props
    return (
        <>

            <div>
                <label htmlFor="name">

                    <p>{ name }</p>
                    <p>{ email }</p>
                </label>
            </div>
        </>
    )
}

export default InputValid