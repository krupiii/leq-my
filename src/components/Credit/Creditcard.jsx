import React, { useState } from 'react'
import Style from './Creditcard.module.css'
import img1 from './images1/Screenshot_1.png'
const Creditcard = () => {
    const [allnumber, setAllNumber] = useState("")
    const [allname, setAllName] = useState("")
    const [alldate, setAllDate] = useState("")
    const [allcvv, setAllCvv] = useState("")
    const [myaa, setMyaa] = useState(true)

    const clickTonum = (e) => {
        setAllNumber(e.target.value)
    }
    const clickToNum = (e) => {
        setAllName(e.target.value)
    }
    const clickToDate = (e) => {
        setAllDate(e.target.value)
    }
    const clickToCvc = (e) => {
        setAllCvv(e.target.value)
    }
    // const clickToFocus = () => {
    //     setMyaa(!myaa)
    // }
    const hhhhhhhh = () => {
        setMyaa(!myaa)
    }
    return (
        <>

            {
                myaa ?
                    <div className={ Style.card }>
                        <div className={ Style.main }>
                            <div className={ Style.photo }>
                                <img src={ img1 } alt="" />
                                <h3><i> Bank of Baroda</i></h3>
                            </div>

                            <div
                                className={ Style.number }>
                                { allnumber === '' ? " •••• •••• •••• ••••" : allnumber }
                            </div>

                            <div
                                className={ Style.name }>
                                { allname === '' ? "YOUR NAME" : allname }
                            </div>

                            <div
                                className={ Style.date }>
                                { alldate === '' ? "Valid Date ../.." : alldate }
                            </div>
                        </div>
                    </div>
                    :
                    <div className={ Style.main }>
                        <div className={ Style.line }>
                        </div>

                        <div className={ Style.line1 }>
                        </div>
                        <div className={ Style.line2 }>
                            { allcvv === '' ? "cvc" : allcvv }
                        </div>
                    </div>
            }




            <div>
                <form>
                    <div className="row">
                        <div className="col-sm-11">
                            <label htmlFor="name">Card Number</label>
                            <input style={ { width: "500px" } }
                                required
                                value={ allnumber }
                                onChange={ clickTonum }
                                type="text"
                                className="form-control"
                                name="number"
                            >
                            </input>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-11">
                            <label htmlFor="name">Card Name</label>
                            <input style={ { width: "500px" } }
                                required
                                value={ allname }
                                onChange={ clickToNum }
                                type="text"
                                className="form-control"
                                name="name"
                            ></input>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="name">Expiration Date</label>
                            <input
                                type="date"
                                onChange={ clickToDate }
                                value={ alldate }
                                name="expiry"
                                className="form-control"
                            ></input>
                        </div>
                        <div className="col-sm-5">
                            <label htmlFor="name">CVC</label>
                            <input
                                type="tel"
                                onChange={ clickToCvc }
                                onFocus={ hhhhhhhh }
                                // onFocus={ clickToFocus }
                                name="cvc"
                                className="card"
                            ></input>
                        </div>
                    </div><br /><br />
                    <button className={ Style.btn }>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Creditcard
