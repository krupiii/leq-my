import React from 'react'

const Krupali2 = (props) => {
    return (
        <>
            <label htmlFor=""> <input type="text" value={ props.name } /></label>
            <button onClick={ props.ClcikToGetNAme }>GetName</button>
        </>
    )
}

export default Krupali2