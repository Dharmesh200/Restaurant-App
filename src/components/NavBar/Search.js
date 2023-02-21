import React, { useEffect, useState } from 'react'
import { restaurantData } from '../Data/RestaurantData'
import '../style.css'
import Form from 'react-bootstrap/Form'
import RestLogo from '../Data/images/png-clipart-graphics-restaurant-logo-restaurant-thumbnail.png'
import RestaurantCard from '../Home/RestaurantCard'

const Search = () => {
    const [RestData, setRestaurantData] = useState(restaurantData)
    // console.log(restaurantData);
    const [copyData, setCopyData] = useState([]);

    const changeData = (e) => {
        let getChangeData = e.toLowerCase()
        if (getChangeData === "") {
            setCopyData(RestData)
        } else {
            let storeData = copyData.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getChangeData)
            })
            setCopyData(storeData)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setCopyData(restaurantData)
        }, 1000);

    }, [])

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">

                <img
                    className='mt-3'
                    src={RestLogo}
                    style={{
                        width: '8rem',
                        position: "relative",
                        left: '2%',
                        cursor: 'pointer'
                    }}
                    alt='Loading....' />

                <h2 className='mt-3'
                    style={{
                        color: "#1b1464",
                        cursor: "pointer"
                    }}>
                    Restaurant App
                </h2>
            </div >
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        onChange={(e) => changeData(e.target.value)}
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button
                    className='btn text-light col-lg-1'
                    style={{ background: '#ed4c67' }}>Check</button>
            </Form>
            <section className='item_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>
                    Restaurants Available Near to You
                </h2>
                <div className='row mt-2 d-flex justify-content-center align-items-center'>
                    {copyData && copyData.length ? <RestaurantCard data={copyData} /> : "Loading..."}
                </div>

            </section>
        </>
    )
}

export default Search