/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const Pagination = () => {
  const [allData, setAllData] = useState([])
  const [count, setCount] = useState(0)
  const [firstData, setFirstData] = useState(0)
  const [lastData, setLastData] = useState(25)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fydata = () => {
      fetch("https://jsonplaceholder.typicode.com/comments", {
      })
        .then((res) => res.json())
        .then((data) => {
          setAllData(data)
          setCount(data.length / 25)
        })
    }
    fydata()
  }, [])

  const clickTodata = (abc) => {
    const Lpage = abc * 25;
    const Fpage = (abc * 25) - 25;
    setLastData(Lpage)
    setFirstData(Fpage)
    setPage(abc)
  }

  const nxtbtn = () => {
    if (allData.length > lastData) {
      clickTodata(page + 1)
    }
  }

  const prebtn = () => {
    if (page !== 1) {
      clickTodata(page - 1)
    }
  }
  return (
    <>

      <nav aria-label="Page navigation example ">
        <ul className="pagination justify-content-center">
          <li className={ page === 1 ? `page-item disabled` : "page-item" }><a className="page-link" onClick={ prebtn } href="#">Previous</a></li>
          {
            Array.from({ length: count }, (ele, index) => {
              return (
                <li
                  className={ page === index + 1 ? `page-item active` : `page-item` }
                  key={ index }
                  onClick={ () => clickTodata(index + 1) }>
                  <a
                    className="page-link" href="#">
                    { index + 1 }
                  </a></li>
              )

            })
          }

          <li className={ page === 20 ? `page-item disabled` : "page-item" } onClick={ nxtbtn } ><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {
            allData.slice(firstData, lastData).map((ele, index) => {
              return (
                <tr key={ index }>
                  <td>{ ele.id }</td>
                  <td>{ ele.name }</td>
                  <td>{ ele.email }</td>
                  <td>{ ele.body }</td>
                </tr>)
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default Pagination