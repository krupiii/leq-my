/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'

const JsonPlace = () => {
    // eslint-disable-next-line no-unused-vars
    const [allcard, setAllCard] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const fdata = (() => {
            fetch("https://jsonplaceholder.typicode.com/photos")
                .then(res => res.json())
                .then((data) => {

                    setAllCard(data)
                    console.log(data);
                })

        })
        fdata()

    }, [])
    return (
        <>
            <div className='d-flex flex-wrap justify-content-evenly'>
                {
                    allcard.slice(0, 50).map((ele, index) => {

                        return (
                            <div className="card m-3" style={ { width: "18rem" } }>
                                <img src={ ele.url } className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6>{ index + 1 }</h6>
                                    <h5 className="card-title">{ ele.title.split(" ")[0] } { ele.title.split(" ")[2] }</h5>
                                    <p className="card-text">{ ele.title }</p>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default JsonPlace