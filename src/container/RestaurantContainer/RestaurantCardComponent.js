import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import "./pagination.css"

const RestaurantCardComponent = ({ data }) => {
    const [page, setPage] = useState(1)
    console.log("below usestate", page);
    let navigate = useNavigate()

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= data.length / 10 && selectedPage !== page) {
            console.log("page", page);
            setPage(selectedPage)
        }
    }
    console.log("select page handler", selectPageHandler());

    console.log("length", data.length);

    return (
        <>
            {
                data.slice(page * 9 - 9, page * 9).map((element) => {
                    return (
                        <Card key={element.id} onClick={() => navigate(`/restaurant/${element.id}`)} style={{ width: '22rem', border: "none" }} className='hove mb-4'>
                            <Card.Img variant="top" className='cd' src={element.imgdata} />
                            <div className='card_body'>
                                <div className='upper_data d-flex justify-content-between align-items-center'>
                                    <h4 className='mt-2'>
                                        {element.rname}
                                    </h4>
                                    <span>{element.rating}&nbsp;★</span>
                                </div>
                                <div className='lower_data d-flex justify-content-between'>
                                    <h5>{element.address}</h5>
                                    <span>{element.price}</span>
                                </div>
                                <div className='extra'>
                                    <div className='last_data d-flex justify-content-between align-item-center'>
                                        <img src={element.arrimg} className="limg" alt='' />
                                        <p>
                                            {element.somedata}
                                        </p>
                                        <img src={element.delimg} className="liamg" alt='' />
                                    </div>
                                </div>
                            </div>
                        </Card >
                    )
                })
            }

            {/* {
                <div className="pagination">
                    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

                    {[...Array(data.length / 10)].map((_, i) => {
                        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                    })}

                    <span onClick={() => selectPageHandler(page + 1)} className={page < data.length / 10 ? "" : "pagination__disable"}>▶</span>
                </div>
            } */}
            {
                <div className="pagination">
                    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
                    {[...Array(data)].map((_, i) => {
                        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                    })}
                    <span onClick={() => selectPageHandler(page + 1)} className={page < data.length / 9 ? "" : "pagination__disable"}>▶</span>
                </div>
            }
        </>
    )
}

export default RestaurantCardComponent