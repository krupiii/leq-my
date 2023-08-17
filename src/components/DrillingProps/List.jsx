import React from 'react'
import Style from './List.module.css'

const List = (props) => {

    return (
        <>
            <div className={ Style.tab }>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Text</th>
                            <th>Gender</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.allData.map(
                                (ele, index) => {
                                    return (
                                        <tr key={ index }>
                                            <th>{ index + 1 }</th>
                                            <th>{ ele.name }</th>
                                            <th>{ ele.email }</th>
                                            <th>{ ele.password }</th>
                                            <th>{ ele.textarea }</th>
                                            <th>{ ele.gender }</th>
                                            <th>
                                                <button onClick={ () => props.deleteData(index) }>Delete</button>
                                            </th>
                                            <th>
                                                <button onClick={ () => props.editData(index) }>Edit</button>
                                            </th>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default List