import React, { useEffect, useState } from 'react'
import FoodData from '../Menu/FoodData'
import './style.css'
import Form from 'react-bootstrap/Form'
import RestLogo from '../images/png-clipart-graphics-restaurant-logo-restaurant-thumbnail.png'
import Cards from '../Menu/Card'


const Search = () => {
    const [foodData, setFoodData] = useState(FoodData)
    // console.log(foodData);

    const [copyData, setCopyData] = useState([]);

    useEffect(() => {
        setCopyData(FoodData)
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
                    <Form.Control type="text" placeholder="Search Restaurant" />
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
                    {copyData && copyData.length ? <Cards data={foodData} /> : ""}
                </div>

            </section>
        </>
    )
}

export default Search