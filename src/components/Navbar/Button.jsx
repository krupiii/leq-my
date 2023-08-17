import React from 'react'

const Button = (props) => {
    return (
        <>
            <p>Hello i am { props.name }</p>
            <button onClick={ props.clickToChange } className='btn btn-success'>Submit</button>
        </>
    )
}

export default Button