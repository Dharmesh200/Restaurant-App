import React from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
const RestaurantCard = ({ data }) => {
    let navigate = useNavigate()
    return (
        <>
            {
                data.map((element) => {
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
        </>
    )
}

export default RestaurantCard