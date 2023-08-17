import React, { useState } from 'react';
import Style from './PasswordInput.module.css'

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState(false);


    const handleCheckbox = () => {
        setPasswordCheck(!passwordCheck);
    };

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <center>
            <div className={ Style.hello }>
                <label>
                    Password:
                    <input
                        type={ passwordCheck ? 'text' : 'password' }
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={ passwordCheck }
                        onChange={ handleCheckbox }
                        className={ Style.chek }

                    />

                </label>
                {/* <i class="fa-solid fa-eye"></i> */ }
            </div>
        </center>
    );
};

export default PasswordInput;


