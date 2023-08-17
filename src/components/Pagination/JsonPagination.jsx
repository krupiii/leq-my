// /* eslint-disable no-use-before-define */
// import React, { useState } from 'react'



// const JsonPagination = () => {

//     const data = [
//         {
//             title: "quidem molestiae enim",
//             content: " quidem molestiae enim quidem molestiae enim quidem molestiae enim"
//         },
//         {
//             title: "sunt qui excepturi placeat culpa",
//             content: "omnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odio"
//         },
//         {
//             title: "omnis laborum odio",
//             content: "sunt qui excepturi placeat culpasunt qui excepturi placeat culpasunt qui excepturi placeat culpa"
//         },
//         {
//             title: "eaque aut omnis a",
//             content: "eaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis a"
//         },
//         {
//             title: "qui fuga est a eum",
//             content: "qui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eum"
//         },
//         {
//             title: "distinctio laborum qui",
//             content: "distinctio laborum quidistinctio laborum quidistinctio laborum quidistinctio laborum qui"
//         },
//         {
//             title: "consequatur autem doloribus natus consectetur",
//             content: "consequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consectetur"
//         },
//         {
//             title: "nesciunt quia et doloremque",
//             content: "nesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremque"
//         }
//     ];


//     // eslint-disable-next-line no-unused-vars
//     const [check, setCheck] = useState(data[0]);
//     console.log(check);
//     // eslint-disable-next-line no-unused-vars
//     const [number, setNumber] = useState(0)


//     const clickToNxt = () => {
//         if (data.length - 1 === number) {
//             setCheck(data[0])
//             setNumber(0)
//         } else {
//             setCheck(data[number + 1])
//             setNumber(number + 1)
//         }
//         console.log(data.length);
//     }

//     const clickToPrev = () => {
//         if (data.length === number) {
//             setCheck(data[0])
//             setNumber(0)
//         } else {
//             setCheck(data[number - 1])
//             setNumber(number - 1)
//         }
//         console.log(data);

//     }

//     const clickTorest = () => {
//         if (data === number) {

//             setNumber(0)
//         } else {
//             setCheck(data[0])
//             setNumber(0)
//         }
//     }

//     return (
//         <div className='container'>
//             <div className="card">
//                 <div className="card-header">
//                     <div className='d-flex justify-content-around'>
//                         <button onClick={ clickTorest }
//                             type="button"
//                             className="btn btn-secondary">
//                             Reset
//                         </button>

//                         <button onClick={ clickToPrev }
//                             type="button"
//                             className={ number === 0 ? "btn btn-primary disabled" : "btn btn-primary" }>
//                             Prev
//                         </button>

//                         <button onClick={ clickToNxt }
//                             type="button"
//                             className={ number === 7 ? "btn btn-success disabled" : "btn btn-success " }>
//                             Next
//                         </button>
//                     </div>
//                 </div>
//                 <div className="card-body">
//                     <h5 className="card-title">{ check.title }</h5>
//                     <p className="card-text">{ check.content }</p>



//                 </div>
//             </div>
//         </div >
//     )
// }

// export default JsonPagination

// import React, { useState } from 'react'

// function JsonPagination() {

//     const data = [
//         {
//             title: "quidem molestiae enim",
//             content: " quidem molestiae enim quidem molestiae enim quidem molestiae enim"
//         },
//         {
//             title: "sunt qui excepturi placeat culpa",
//             content: "omnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odio"
//         },
//         {
//             title: "omnis laborum odio",
//             content: "sunt qui excepturi placeat culpasunt qui excepturi placeat culpasunt qui excepturi placeat culpa"
//         },
//         {
//             title: "eaque aut omnis a",
//             content: "eaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis a"
//         },
//         {
//             title: "qui fuga est a eum",
//             content: "qui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eum"
//         },
//         {
//             title: "distinctio laborum qui",
//             content: "distinctio laborum quidistinctio laborum quidistinctio laborum quidistinctio laborum qui"
//         },
//         {
//             title: "consequatur autem doloribus natus consectetur",
//             content: "consequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consectetur"
//         },
//         {
//             title: "nesciunt quia et doloremque",
//             content: "nesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremque"
//         }
//     ];

//     const [count, setCount] = useState(0);

//     const clickToNxt = () => {
//         if (data.length - 1 > count) {
//             setCount(count + 1);
//         }
//     }

//     const clickToPrev = () => {
//         if (count - 0) {
//             setCount(count - 1);
//         }
//     }


//     const clickTorest = () => {
//         if (count - 0) {
//             setCount([0])
//         }
//     }
//     return (
//         <div>
//             <div className='container'>
//                 <div className="card">
//                     <div className="card-header">
//                         <div className='d-flex justify-content-around'>
//                             <button onClick={ clickTorest }
//                                 type="button"
//                                 className="btn btn-secondary">
//                                 Reset
//                             </button>

//                             <button onClick={ clickToPrev }
//                                 type="button"
//                                 className="btn btn-primary">
//                                 Prev
//                             </button>

//                             <button onClick={ clickToNxt }
//                                 type="button"
//                                 className={ Number === 7 ? "btn btn-success disabled" : "btn btn-success " }>
//                                 Next
//                             </button>
//                         </div>
//                     </div>
//                     <div className="card-body">
//                         <h5 className="card-title">{ count + 1 } { data[count].title }</h5>
//                         <p className="card-text">{ data[count].content }</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default JsonPagination

import React, { useEffect, useState } from 'react'

const JsonPagination = () => {

    const data = [
        {
            title: "quidem molestiae enim",
            content: " quidem molestiae enim quidem molestiae enim quidem molestiae enim"
        },
        {
            title: "sunt qui excepturi placeat culpa",
            content: "omnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odioomnis laborum odio"
        },
        {
            title: "omnis laborum odio",
            content: "sunt qui excepturi placeat culpasunt qui excepturi placeat culpasunt qui excepturi placeat culpa"
        },
        {
            title: "eaque aut omnis a",
            content: "eaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis aeaque aut omnis a"
        },
        {
            title: "qui fuga est a eum",
            content: "qui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eumqui fuga est a eum"
        },
        {
            title: "distinctio laborum qui",
            content: "distinctio laborum quidistinctio laborum quidistinctio laborum quidistinctio laborum qui"
        },
        {
            title: "consequatur autem doloribus natus consectetur",
            content: "consequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consecteturconsequatur autem doloribus natus consectetur"
        },
        {
            title: "nesciunt quia et doloremque",
            content: "nesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremquenesciunt quia et doloremque"
        }
    ];

    const [allData, setAllData] = useState(0)
    console.log(data);

    useEffect(() => {
        setAllData(0)
    }, [])

    const clickToNxt = () => {
        setAllData(allData + 1)
    }

    const clickToPrev = () => {
        setAllData(allData - 1)
    }

    const clickTorest = () => {
        setAllData([0])
    }

    return (
        <>
            <div>
                <div className='container'>
                    <div className="card">
                        <div className="card-header">
                            <div className='d-flex justify-content-around'>
                                <button onClick={ clickTorest }
                                    type="button"
                                    className="btn btn-secondary">
                                    Reset
                                </button>

                                <button onClick={ clickToPrev }
                                    type="button"
                                    className={ allData === 0 ? "btn btn-primary disabled" : "btn btn-primary" }>
                                    Prev
                                </button>

                                <button onClick={ clickToNxt }
                                    type="button"
                                    className={ allData === data.length - 1 ? "btn btn-success disabled" : "btn btn-success " }>
                                    Next
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ allData + 1 } { data[allData].title }</h5>
                            <p className="card-text">{ data[allData].content }</p>
                        </div>
                    </div >
                </div>
            </div>
        </>
    )
}

export default JsonPagination