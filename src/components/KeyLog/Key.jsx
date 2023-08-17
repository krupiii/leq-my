import React, { useState } from 'react';
import Style from './Key.module.css'

const Key = () => {
    const [input, setInput] = useState('');
    const [krupali, setKrupali] = useState([])
    const [data, setData] = useState("")

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleConsoleInput = (event) => {
        console.log(event.key);
        if (event.key === 'Enter' && data !== "") {
            console.log(input);
            krupali[data] = input
            console.log(data);
            setInput('')
            setData()

        } else if (event.key === 'Enter') {
            setKrupali([...krupali, input])
            setInput('')
        }
    };

    const clearData = (id) => {
        const filterData = krupali.filter((ele, index) => {
            return index !== id
        })
        setKrupali(filterData)
    }
    const handleUpdate = (id) => {
        setInput(krupali[id])
        setData(id)
    }


    return (
        <center>
            <div>
                <label htmlFor="name">
                    ABC:
                    <input
                        type="text"
                        value={ input }
                        onChange={ handleInputChange }
                        onKeyDown={ handleConsoleInput }
                        id='Done' />
                </label>

                <table>
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            krupali.map((ele, index) => {
                                return (
                                    <tr key={ index }>
                                        <th>{ index + 1 }</th>
                                        <th>{ ele }</th>
                                        <th>
                                            <button onClick={ () => clearData(index) }>DeletData</button>
                                            <button className={ Style.hello } onClick={ () => handleUpdate(index) }>UpdateData</button>
                                        </th>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </center>
    );
};

export default Key;

