import React from 'react'
import Demo2 from './Demo2';
import Style from './demo.module.css';

const Demo = () => {
    const demoapp = () => {
        var abc = document.getElementById('abc').value;
        console.log(abc);
        var cda = document.getElementById('cda').value;
        console.log(cda);
        var xyz = document.getElementById('xyz').value;
        console.log(xyz);

        const obj2 = { abc, cda, xyz };
        console.log(obj2);


        if (abc === "") {
            // console.log('Please enter the Name');
            document.getElementById('first').style.display = 'block';
        } else {
            console.log(abc);
        } if (cda === "") {
            // console.log('Please enter the FirstName');
            document.getElementById('second').style.display = 'block';
        } else {
            console.log(cda);
        } if (xyz === "") {
            // console.log('Please enter the SecondName');
            document.getElementById('third').style.display = 'block';

        } else {
            console.log(xyz);
        }



    }

    return (
        <div>
            <form>
                <label htmlFor="">Name: <input type="text" id='abc' /></label> <br /><br />
                <span id='first' className={ Style.class1 }>Please Enter the Name</span>
                <label htmlFor="">FirstName: <input type="text" id='cda' /></label> <br /><br />
                <span id='second' className={ Style.class2 }>Please Enter the FirstName</span>
                <label htmlFor="">SecondName: <input type="text" id='xyz' /></label><br /><br />
                <span id='third' className={ Style.class3 }>Please Enter the SecondName</span>

            </form>
            <Demo2

                demoapp={ demoapp } />

        </div>
    )
}

export default Demo