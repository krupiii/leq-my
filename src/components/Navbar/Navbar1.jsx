import React from 'react';
import { useState } from 'react';
import Button from './Button';

const Navbar1 = () => {

    const [stdName, setStdName] = useState('Renci');
    const [num, setNum] = useState(0)

    const clickToChange = () => {
        setStdName('Krupali')
        console.log('Clicked....');
    }

    const clickToP = () => {
        if (num < 10) {
            setNum(num + 1);
        } else {
            alert('Sorry,Ten limit')
            setNum(10);
        }
    }
    const clickToM = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert('Sorry,Zero limit')
            setNum(0);
        }
    };


    return (
        <>
            <div className='d-flex'>
                <button onClick={ clickToP } className='btn btn-success'>ClickToPlus +</button>
                <p className='m-5 fs-1'>{ num }</p>
                <button onClick={ clickToM } className='btn btn-success'>ClickToMinus -</button>
            </div>

            <Button
                name={ stdName }
                clickToChange={ clickToChange }
            />
        </>
    )
}

export default Navbar1