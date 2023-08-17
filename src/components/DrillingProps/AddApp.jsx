import React from 'react'
import Style from './AddApp.module.css'


const AddApp = (props) => {


    return (
        <>
            <center>
                <div className={ Style.hello }>
                    <form onSubmit={ props.submitData }>

                        <label
                            htmlFor="name"
                            className='mt-3'>
                            Name:

                            <input
                                type="text"
                                required
                                name='name'
                                id='name' /></label>
                        <br /><br />

                        <label
                            htmlFor="email"
                            className='mt-3'>
                            Email:

                            <input
                                type="text"
                                required
                                name='email'
                                id='email' />
                        </label>
                        <br /><br />

                        <label
                            htmlFor="password"
                            className='mt-3'>
                            Password :

                            <input
                                type="text"
                                required
                                name='password'
                                id='password' />
                        </label>
                        <br /><br />

                        <label
                            htmlFor=""
                            className='mt-3'>
                            Choose your Gender:

                            male
                            <input
                                type="radio"
                                name='gender'
                                id='male'
                                value={ 'male' }
                                required />

                            Female
                            <input
                                type="radio"
                                name='gender'
                                id='female'
                                value={ 'female' }
                                required />

                        </label><br /><br />

                        <label
                            htmlFor="textarea"
                            className='mt-3'
                            name='textarea'
                            id='textarea'>
                            Text Area:

                            <textarea
                                name="textarea" >
                            </textarea>
                        </label>
                        <br /><br />

                        <button
                            className='mt-3'
                            type='submit'>
                            Add Data
                        </button>

                    </form>
                </div>
            </center>
        </>
    )
}

export default AddApp